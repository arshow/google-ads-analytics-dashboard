export default function Home() {
  const metrics = [
    { label: "Impressions", value: "128.4K", change: "+12.8%" },
    { label: "Clicks", value: "6,842", change: "+8.4%" },
    { label: "Conversions", value: "312", change: "+16.1%" },
    { label: "ROAS", value: "4.36×", change: "+0.42" },
  ];

  const capabilities = [
    {
      index: "01",
      title: "Campaign reporting",
      copy: "Account-specific performance views for client-authorized Google Ads campaigns.",
    },
    {
      index: "02",
      title: "Keyword analysis",
      copy: "Keyword and search-term metrics organized for consistent client reporting.",
    },
    {
      index: "03",
      title: "On-demand refresh",
      copy: "Current reporting data is retrieved when an authorized user requests an update.",
    },
    {
      index: "04",
      title: "Account isolation",
      copy: "Each client view is restricted to that client's explicitly authorized account data.",
    },
  ];

  const safeguards = [
    "OAuth 2.0 authentication",
    "Credentials kept out of the frontend",
    "Client-authorized accounts only",
    "No public registration",
    "Account-specific client access",
    "No automatic campaign changes",
    "No token sharing or resale",
    "Read-only reporting workflow",
  ];

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Arshow Analytics home">
          <span className="mark">A</span>
          <span>
            Arshow <b>Analytics</b>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#business">Business</a>
          <a href="#tool">Tool</a>
          <a href="#security">Security</a>
          <a className="nav-cta" href="mailto:arshow@gmail.com">
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Restricted-access reporting platform
          </div>
          <h1>
            A clearer view of
            <br />
            <em>client-authorized performance.</em>
          </h1>
          <p className="hero-lede">
            A read-only Google Ads analytics and reporting platform for
            cross-border e-commerce sellers, internal analysts and authorized
            client users.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#tool">
              Explore the workflow <span aria-hidden="true">→</span>
            </a>
            <span className="owner-note">
              Operated by Arshow
              <small>Project-based analytics &amp; reporting service</small>
            </span>
          </div>
        </div>

        <div className="dashboard-shell" aria-label="Illustrative dashboard preview">
          <div className="dashboard-topbar">
            <span className="traffic-lights">
              <i />
              <i />
              <i />
            </span>
            <span className="preview-label">Interface preview · illustrative data</span>
            <span className="read-only-chip">Read only</span>
          </div>
          <div className="dashboard-body">
            <div className="dashboard-heading">
              <div>
                <span>Performance overview</span>
                <strong>Last 30 days</strong>
              </div>
              <button type="button" aria-label="Displayed account selector">
                Authorized client account <span>⌄</span>
              </button>
            </div>
            <div className="metric-grid">
              {metrics.map((metric) => (
                <div className="metric-card" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <small>{metric.change}</small>
                </div>
              ))}
            </div>
            <div className="chart-card">
              <div className="chart-header">
                <div>
                  <span className="legend purple" /> Conversion value
                </div>
                <div>
                  <span className="legend green" /> Ad cost
                </div>
              </div>
              <div className="chart-area" aria-hidden="true">
                <div className="grid-lines" />
                <div className="bar b1" />
                <div className="bar b2" />
                <div className="bar b3" />
                <div className="bar b4" />
                <div className="bar b5" />
                <div className="bar b6" />
                <div className="bar b7" />
                <div className="bar b8" />
                <div className="trend-line">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="chart-axis">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-footnote">
          <span>Google Ads API</span>
          <i />
          <span>Official Google Ads MCP Server</span>
          <i />
          <span>OAuth 2.0</span>
          <i />
          <span>GAQL reporting</span>
        </div>
      </section>

      <section className="business-section" id="business">
        <div className="section-kicker">01 / Business context</div>
        <div className="business-grid">
          <div>
            <h2>
              Built to support a real
              <br />
              advertising workflow.
            </h2>
          </div>
          <div className="business-copy">
            <p className="lead">
              Arshow provides project-based Google Ads data analysis and
              reporting services to cross-border e-commerce sellers.
            </p>
            <p>
              Clients pay a project fee in exchange for account-specific
              performance analysis, structured reports, restricted dashboard
              access and reporting support for the agreed project.
            </p>
            <p>
              The platform is used by Arshow, authorized internal employees and
              authorized client users. It is not open to public registration and
              is not sold as standalone software.
            </p>
          </div>
        </div>
        <div className="exchange-strip">
          <div>
            <span className="exchange-number">01</span>
            <strong>Client authorization</strong>
            <p>The client explicitly authorizes access to its Google Ads account.</p>
          </div>
          <div className="exchange-arrow" aria-hidden="true">
            ↗
          </div>
          <div>
            <span className="exchange-number">02</span>
            <strong>Project-based service</strong>
            <p>Arshow retrieves and analyzes reporting data on demand.</p>
          </div>
          <div className="exchange-arrow" aria-hidden="true">
            ↗
          </div>
          <div>
            <span className="exchange-number">03</span>
            <strong>Account-specific reporting</strong>
            <p>The client receives structured analysis, reports and dashboard access.</p>
          </div>
        </div>
      </section>

      <section className="tool-section" id="tool">
        <div className="section-kicker light">02 / The reporting platform</div>
        <div className="tool-intro">
          <h2>
            Reporting that is repeatable,
            <br />
            structured and <em>account-specific.</em>
          </h2>
          <p>
            The dashboard converts Google Ads reporting data into focused
            client-authorized views. It supports analysis and reporting; it does
            not create or modify campaigns.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="necessity-panel">
          <div className="necessity-copy">
            <span className="panel-label">Why API access is essential</span>
            <h3>Manual exports break the reporting rhythm.</h3>
            <p>
              Manual interface exports require repeated work for each client
              account and can introduce inconsistent date ranges, filters and
              columns. API access enables standardized, on-demand retrieval for
              account-specific analysis and reporting.
            </p>
            <div className="necessity-tags">
              <span>On-demand updates</span>
              <span>Historical comparisons</span>
              <span>Consistent metrics</span>
            </div>
          </div>
          <div className="query-card">
            <div className="query-title">
              <span>Reporting request</span>
              <small>GoogleAdsService.SearchStream</small>
            </div>
            <pre>
              <code>{`SELECT
  campaign.id,
  campaign.name,
  metrics.impressions,
  metrics.clicks,
  metrics.cost_micros,
  metrics.conversions
FROM campaign
WHERE segments.date
  DURING LAST_30_DAYS`}</code>
            </pre>
            <div className="query-result">
              <span className="check">✓</span>
              <div>
                <strong>Read-only response</strong>
                <small>Structured rows prepared for account-specific reporting</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="architecture-section">
        <div className="section-kicker">03 / Data flow</div>
        <div className="architecture-heading">
          <h2>A deliberately narrow architecture.</h2>
          <p>
            The workflow is limited to authenticated reporting for accounts
            explicitly authorized by each client.
          </p>
        </div>
        <div className="flow-row">
          <div className="flow-node">
            <span>01</span>
            <strong>Authorized user</strong>
            <small>Client or internal analyst</small>
          </div>
          <div className="flow-connector">→</div>
          <div className="flow-node featured">
            <span>02</span>
            <strong>Restricted dashboard</strong>
            <small>Account-specific reporting</small>
          </div>
          <div className="flow-connector">→</div>
          <div className="flow-node">
            <span>03</span>
            <strong>Google Ads MCP</strong>
            <small>Read-only integration</small>
          </div>
          <div className="flow-connector">→</div>
          <div className="flow-node">
            <span>04</span>
            <strong>Google Ads API</strong>
            <small>Client-authorized account data</small>
          </div>
        </div>
        <div className="api-table-wrap">
          <table>
            <thead>
              <tr>
                <th>API capability</th>
                <th>Use in the workflow</th>
                <th>Access pattern</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>GoogleAdsService.Search</td>
                <td>Paginated resource and metric retrieval</td>
                <td><span className="table-chip">Read only</span></td>
              </tr>
              <tr>
                <td>GoogleAdsService.SearchStream</td>
                <td>Efficient retrieval for larger recurring reports</td>
                <td><span className="table-chip">Read only</span></td>
              </tr>
              <tr>
                <td>Google Ads Query Language</td>
                <td>Campaign, ad group, keyword and search-term reporting</td>
                <td><span className="table-chip">Reporting</span></td>
              </tr>
              <tr>
                <td>Resource metadata</td>
                <td>Understand supported fields, metrics and segments</td>
                <td><span className="table-chip">Metadata</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="security-section" id="security">
        <div className="security-intro">
          <div className="section-kicker light">04 / Security &amp; compliance</div>
          <h2>
            Restricted by design.
            <br />
            Transparent by default.
          </h2>
          <p>
            The tool is designed around the smallest practical access surface:
            authenticated users, client-authorized accounts, account isolation
            and a reporting-only workflow.
          </p>
        </div>
        <div className="safeguard-list">
          {safeguards.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
              <i aria-hidden="true">✓</i>
            </div>
          ))}
        </div>
        <div className="compliance-note">
          <strong>Scope statement</strong>
          <p>
            The platform accesses client accounts only after explicit
            authorization. Each client can view only its own account data. The
            platform does not distribute developer tokens, expose credentials,
            or automatically create, edit, pause or delete campaigns.
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <span className="footer-label">Google Ads Analytics Dashboard</span>
            <h2>Client reporting, built with clear boundaries.</h2>
          </div>
          <a href="mailto:arshow@gmail.com">
            arshow@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Arshow · Analytics &amp; reporting service</span>
          <span>
            Google Ads is a trademark of Google LLC. This site describes an
            independent restricted-access reporting platform.
          </span>
        </div>
      </footer>
    </main>
  );
}
