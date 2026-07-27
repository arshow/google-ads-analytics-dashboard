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
      copy: "Daily and weekly performance views across owned Search and Display campaigns.",
    },
    {
      index: "02",
      title: "Keyword analysis",
      copy: "Keyword and search-term metrics organized for efficient owner review.",
    },
    {
      index: "03",
      title: "Trend monitoring",
      copy: "Historical comparisons for cost, clicks, conversions and conversion value.",
    },
    {
      index: "04",
      title: "Structured exports",
      copy: "Repeatable internal reports without relying on manual interface downloads.",
    },
  ];

  const safeguards = [
    "OAuth 2.0 authentication",
    "Credentials kept out of the frontend",
    "Owned accounts only",
    "No public registration",
    "No third-party client access",
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
            Internal reporting system
          </div>
          <h1>
            A clearer view of
            <br />
            <em>owned ad performance.</em>
          </h1>
          <p className="hero-lede">
            A private, read-only Google Ads analytics workflow built for an
            independent advertiser to monitor campaign performance, analyze
            keywords and produce consistent internal reports.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#tool">
              Explore the workflow <span aria-hidden="true">→</span>
            </a>
            <span className="owner-note">
              Operated by Arshow
              <small>Individual developer &amp; advertiser</small>
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
                Owned account <span>⌄</span>
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
              Arshow operates independent online retail projects that sell
              physical consumer products through owned online storefronts.
              Google Ads is used to reach prospective customers and generate
              direct product sales.
            </p>
            <p>
              The primary customers are individual consumers purchasing products
              for personal use. The value exchange is straightforward:
              customers pay for the products they order, and the business
              provides the products together with order fulfilment and customer
              support.
            </p>
            <p>
              This analytics tool is an internal operating system for the
              advertiser. It is not sold, licensed or offered as a service to
              external customers.
            </p>
          </div>
        </div>
        <div className="exchange-strip">
          <div>
            <span className="exchange-number">01</span>
            <strong>Prospective customer</strong>
            <p>Discovers a relevant product through a Google Ads campaign.</p>
          </div>
          <div className="exchange-arrow" aria-hidden="true">
            ↗
          </div>
          <div>
            <span className="exchange-number">02</span>
            <strong>Owned online store</strong>
            <p>Provides product information, checkout and order fulfilment.</p>
          </div>
          <div className="exchange-arrow" aria-hidden="true">
            ↗
          </div>
          <div>
            <span className="exchange-number">03</span>
            <strong>Direct value exchange</strong>
            <p>The customer pays for a physical product and related support.</p>
          </div>
        </div>
      </section>

      <section className="tool-section" id="tool">
        <div className="section-kicker light">02 / The internal tool</div>
        <div className="tool-intro">
          <h2>
            Reporting that is repeatable,
            <br />
            structured and <em>owner-controlled.</em>
          </h2>
          <p>
            The dashboard converts Google Ads reporting data into focused
            internal views. It supports manual business decisions; it does not
            make campaign changes.
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
              Recurring interface downloads require repeated manual work and do
              not provide a dependable way to maintain daily historical
              snapshots or produce consolidated reports. API access enables
              consistent retrieval in a structured format, allowing the owner to
              monitor meaningful changes over time.
            </p>
            <div className="necessity-tags">
              <span>Daily snapshots</span>
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
                <small>Structured rows prepared for internal reporting</small>
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
            owned or explicitly authorized by the operator.
          </p>
        </div>
        <div className="flow-row">
          <div className="flow-node">
            <span>01</span>
            <strong>Authorized owner</strong>
            <small>Single internal user</small>
          </div>
          <div className="flow-connector">→</div>
          <div className="flow-node featured">
            <span>02</span>
            <strong>Private dashboard</strong>
            <small>Reporting interface</small>
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
            <small>Owned account data</small>
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
            one owner, authorized accounts and a reporting-only workflow.
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
            The application does not create Google Ads accounts, manage
            third-party client accounts, distribute developer tokens, expose
            credentials, or automatically create, edit, pause or delete
            campaigns. Optimization decisions are reviewed and performed
            manually by the account owner.
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div>
            <span className="footer-label">Google Ads Analytics Dashboard</span>
            <h2>Internal reporting, built with clear boundaries.</h2>
          </div>
          <a href="mailto:arshow@gmail.com">
            arshow@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Arshow · Individual developer &amp; advertiser</span>
          <span>
            Google Ads is a trademark of Google LLC. This site describes an
            independent internal tool.
          </span>
        </div>
      </footer>
    </main>
  );
}
