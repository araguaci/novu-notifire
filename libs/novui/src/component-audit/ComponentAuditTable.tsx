import React, { useMemo, useState } from 'react';
import { css } from '../../styled-system/css';

interface JsonData {
  [key: string]: {
    instances: number;
    props: {
      [key: string]: number | string[];
    };
    srcPkg: string;
  };
}

interface ComponentAuditTableProps {
  data: JsonData;
  className?: string;
}

type SortableKey = keyof Omit<JsonData[string], 'props'> | 'name';

export const ComponentAuditTable: React.FC<ComponentAuditTableProps> = ({ data: jsonData, className }) => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<SortableKey | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);

  const data = useMemo(() => {
    return Object.entries(jsonData).map(([key, value]) => ({ ...value, name: key.split('/')[1] }));
  }, [jsonData]);

  const toggleRow = (name: string) => {
    setExpandedRows((prevState) =>
      prevState.includes(name) ? prevState.filter((row) => row !== name) : [...prevState, name]
    );
  };

  const sortData = (key: SortableKey) => {
    if (sortColumn === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(key);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (key: SortableKey) => {
    if (sortColumn !== key) return null;
    if (sortOrder === 'asc') return '⬆️';
    if (sortOrder === 'desc') return '⬇️';

    return null;
  };

  const sortedData = sortColumn
    ? data.sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
        }

        return 0;
      })
    : data;

  return (
    <table
      className={`${css({ width: '[100%]', borderCollapse: 'collapse', color: 'typography.text.main' })} ${
        className ?? ''
      }`}
    >
      <thead>
        <tr className={css({ bg: 'surface.popover', fontSize: '100', fontWeight: 'strong' })}>
          <th
            className={css({
              py: '[2]',
              px: '25',
              textAlign: 'left',
              borderBottom: 'solid',
              borderColor: 'typography.text.secondary',
              cursor: 'pointer',
            })}
            onClick={() => sortData('name')}
          >
            Name {getSortIcon('name')}
          </th>
          <th
            className={css({
              py: '[2]',
              px: '25',
              textAlign: 'left',
              borderBottom: 'solid',
              borderColor: 'typography.text.secondary',
              cursor: 'pointer',
            })}
            onClick={() => sortData('instances')}
          >
            Instance Count {getSortIcon('instances')}
          </th>
          <th
            className={css({
              py: '[2]',
              px: '25',
              textAlign: 'left',
              borderBottom: 'solid',
              borderColor: 'typography.text.secondary',
              cursor: 'pointer',
            })}
            onClick={() => sortData('srcPkg')}
          >
            Source {getSortIcon('srcPkg')}
          </th>
          <th
            className={css({
              py: '[2]',
              px: '25',
              textAlign: 'left',
              borderBottom: 'solid',
              borderColor: 'typography.text.secondary',
            })}
          >
            Props
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map(({ name, instances, props, srcPkg }) => (
          <React.Fragment key={`${srcPkg}-${name}`}>
            <tr className={css({ bg: 'surface.page', _even: { bg: { base: '[#DDDDDD]', _dark: '[#222233]' } } })}>
              <td
                className={css({
                  py: '[2]',
                  px: '25',
                  borderBottom: 'solid',
                  borderColor: 'typography.text.secondary',
                })}
              >
                {name}
              </td>
              <td
                className={css({
                  py: '[2]',
                  px: '25',
                  borderBottom: 'solid',
                  borderColor: 'typography.text.secondary',
                })}
              >
                {instances}
              </td>
              <td
                className={css({
                  py: '[2]',
                  px: '25',
                  borderBottom: 'solid',
                  borderColor: 'typography.text.secondary',
                })}
              >
                {srcPkg}
              </td>
              <td
                className={css({
                  py: '[2]',
                  px: '25',
                  borderBottom: 'solid',
                  borderColor: 'typography.text.secondary',
                  maxW: '[300px]',
                  textOverflow: 'ellipsis',
                })}
              >
                <span
                  className={css({
                    textDecoration: 'underline',
                    _hover: { color: 'typography.text.feedback.info' },
                    cursor: 'pointer',
                  })}
                  onClick={() => toggleRow(name)}
                >
                  {Object.entries(props)
                    .slice(0, 3)
                    .map(([prop, value]) => `${prop}: ${typeof value === 'number' ? value : value.join(', ')}`)
                    .join(', ')}
                  {Object.keys(props).length > 3 && '...'}
                </span>
              </td>
            </tr>
            {expandedRows.includes(name) && (
              <tr>
                <td colSpan={4} className={css({ py: '[2]', px: '25' })}>
                  <div
                    className={css({
                      display: 'grid',
                      gridTemplateColumns: '[repeat(auto-fit, minmax(150px, 1fr))]',
                      gap: '25',
                    })}
                  >
                    {Object.entries(props).map(([prop, value]) => (
                      <div
                        key={prop}
                        className={css({
                          bg: 'surface.popover',
                          px: '25',
                          py: '[2]',
                          display: 'grid',
                          gridTemplateColumns: '[max-content 1fr]',
                          alignItems: 'center',
                          gap: '25',
                        })}
                      >
                        <span className={css({ fontWeight: 'strong' })}>{prop}:</span>
                        <span>{typeof value === 'number' ? value : value.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
