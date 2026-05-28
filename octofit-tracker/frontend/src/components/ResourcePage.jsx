import { useEffect, useState } from 'react';
import { codespaceConfigHelp, fetchCollection } from '../lib/api';

function formatLabel(label) {
  return label
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (value) => value.toUpperCase());
}

function renderValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  if (value == null || value === '') {
    return '—';
  }

  return String(value);
}

export default function ResourcePage({
  title,
  resource,
  description,
  emptyMessage,
  columns,
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadItems() {
      setLoading(true);
      setError('');

      try {
        const nextItems = await fetchCollection(resource);

        if (!cancelled) {
          setItems(nextItems);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : `Failed to load ${title}`);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadItems();

    return () => {
      cancelled = true;
    };
  }, [resource, title]);

  return (
    <section className="resource-shell">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
        <div>
          <p className="text-uppercase section-kicker mb-2">Presentation Tier</p>
          <h1 className="display-6 fw-semibold mb-2">{title}</h1>
          <p className="text-secondary mb-0">{description}</p>
        </div>
        <div className="api-note">
          <div className="small text-uppercase fw-semibold mb-2">Codespaces</div>
          <p className="mb-0 small text-secondary">{codespaceConfigHelp}</p>
        </div>
      </div>

      {loading ? <div className="status-card">Loading {title.toLowerCase()}...</div> : null}

      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}

      {!loading && !error && items.length === 0 ? (
        <div className="status-card">{emptyMessage}</div>
      ) : null}

      {!loading && !error && items.length > 0 ? (
        <div className="table-responsive panel-card">
          <table className="table table-hover align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">
                    {column.label ?? formatLabel(column.key)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item._id ?? `${resource}-${index}`}>
                  {columns.map((column) => (
                    <td key={column.key}>{renderValue(item[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </section>
  );
}