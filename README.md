# Google Ads Analytics Dashboard

An internal, read-only Google Ads reporting and analytics tool operated by an
independent advertiser.

## Website

The public project page explains the underlying business model, the internal
tool, why Google Ads API access is functionally necessary, the reporting data
flow, and the security and compliance boundaries.

## Purpose

The dashboard supports recurring analysis of Google Ads accounts owned or
explicitly authorized by the operator. It is designed to:

- report campaign and ad group performance;
- analyze keyword and search-term metrics;
- monitor cost, clicks, conversions, and conversion value over time;
- maintain consistent daily and weekly internal reporting views; and
- reduce reliance on repeated manual report exports.

## API usage

The current workflow is read-only. It uses:

- `GoogleAdsService.Search`;
- `GoogleAdsService.SearchStream`;
- Google Ads Query Language (GAQL); and
- the official Google Ads MCP Server integration.

## Access and compliance

The tool:

- is used only by the owner and authorized internal users;
- accesses owned or explicitly authorized Google Ads accounts;
- does not provide public registration;
- does not manage third-party client accounts;
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
