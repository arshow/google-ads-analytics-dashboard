# Google Ads Analytics Dashboard

A restricted-access, read-only Google Ads analytics and reporting platform used
to provide project-based data analysis and reporting services to cross-border
e-commerce sellers.

## Website

The public project page explains the service model, the restricted reporting
platform, why Google Ads API access is functionally necessary, the reporting
data flow, client authorization, account isolation, and compliance boundaries.

GitHub Pages URL:

<https://arshow.github.io/google-ads-analytics-dashboard/>

The site is exported as static HTML with Next.js and deployed automatically by
the workflow in `.github/workflows/deploy-pages.yml` whenever `main` is pushed.

## Purpose

The dashboard supports on-demand analysis of Google Ads accounts explicitly
authorized by clients. It is designed to:

- report campaign and ad group performance;
- analyze keyword and search-term metrics;
- monitor cost, clicks, conversions, and conversion value over time;
- provide account-specific views to authorized internal and client users; and
- reduce reliance on repeated manual report exports.

The current service supports two client-authorized Google Ads accounts and
approximately four active campaigns. Data is refreshed on demand.

## API usage

The current workflow is read-only. It uses:

- `GoogleAdsService.Search`;
- `GoogleAdsService.SearchStream`;
- Google Ads Query Language (GAQL); and
- the official Google Ads MCP Server integration.

## Access and compliance

The tool:

- is used by the operator, authorized internal employees, and authorized clients;
- accesses only Google Ads accounts explicitly authorized by each client;
- restricts each client to its own account-specific reporting data;
- does not provide public registration;
- does not resell or distribute Google Ads API access;
- does not expose developer tokens or OAuth credentials; and
- does not automatically create, edit, pause, or delete campaigns.

Interface visuals on the public project page are labelled as illustrative data.

## Design documentation

See
[`doc/Google_Ads_Internal_Analytics_Design_Doc.md`](doc/Google_Ads_Internal_Analytics_Design_Doc.md)
for the architecture, data handling, permissions, security measures, and
compliance scope.

## Contact

`arshow@gmail.com`

## License

MIT
