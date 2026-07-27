# Google Ads API Design Document
## Restricted-Access Analytics and Reporting Platform for Client-Authorized Accounts

## 1. Introduction

This document describes the business purpose, system design, data handling,
access controls, and compliance posture of the Arshow Google Ads Analytics
Dashboard.

Arshow provides project-based Google Ads data analysis and reporting services
to cross-border e-commerce sellers. Clients pay a project fee in exchange for
account-specific performance analysis, structured reports, restricted dashboard
access, and reporting support for the agreed project.

The platform supports delivery of this service. It is not open to public
registration and is not sold or licensed as a standalone SaaS product.

The platform currently supports two client-authorized Google Ads accounts and
approximately four active campaigns. Reporting data is refreshed on demand.

## 2. Business Model and Value Exchange

The primary customers are cross-border e-commerce sellers that use Google Ads
to promote their products in international markets.

The value exchange is:

- The client pays a project-based service fee.
- The client explicitly authorizes access to the relevant Google Ads account.
- Arshow provides account-specific data analysis, reporting, dashboard access,
  and reporting support.
- Client users can view only reporting data associated with their own
  authorized Google Ads account.

Google Ads API access is not resold or distributed. Clients do not receive the
developer token, OAuth credentials, or direct API credentials.

## 3. Tool Overview

The Google Ads Analytics Dashboard is a restricted-access, read-only reporting
platform used by:

- the operator;
- authorized internal employees; and
- authorized client users.

The platform provides:

- campaign performance reporting;
- ad group monitoring;
- keyword and search-term analysis;
- cost, conversion, and conversion-value reporting;
- historical period comparisons;
- account-specific dashboards; and
- on-demand reporting updates.

The platform does not:

- provide public registration;
- allow one client to view another client's data;
- resell or distribute Google Ads API access;
- expose developer tokens or OAuth credentials to frontend users;
- create Google Ads accounts;
- automatically create, edit, pause, or delete campaigns, ads, keywords, bids,
  or budgets; or
- perform unattended campaign automation.

## 4. System Architecture

The platform uses a restricted, account-scoped architecture.

Core components:

- **Restricted Dashboard**  
  Provides authenticated, account-specific reporting views to internal and
  client users.

- **Backend Service**  
  Handles authenticated requests, access checks, report generation, API request
  coordination, and response normalization.

- **Google Ads API Integration Layer**  
  Communicates with the official Google Ads API through the Google Ads MCP
  Server. It constructs read-only reporting queries and normalizes responses.

- **Reporting Module**  
  Converts retrieved data into campaign, ad group, keyword, search-term, and
  trend reports.

- **Protected Data Store**  
  Retains only the configuration, authorization references, limited reporting
  data, and audit information required to provide the reporting service.

Basic workflow:

```text
Authorized internal or client user
-> Restricted dashboard
-> Backend authorization and account-scope check
-> Google Ads API integration layer
-> Client-authorized Google Ads account
-> Account-specific report
```

## 5. Functional API Necessity

Google Ads API access is essential because the service requires current,
structured, and account-specific advertising performance data.

Manual exports are not sufficient because they require repeated work for each
client account and can introduce inconsistent date ranges, filters, columns,
and account settings. A manual export and upload process would also prevent
authorized users from requesting updated reports through the restricted
dashboard.

API access enables the platform to:

- retrieve consistent reporting fields and metrics;
- refresh reports on demand;
- maintain account-specific reporting views;
- compare performance across reporting periods;
- reduce errors caused by repeated manual exports; and
- provide clients with updated reporting without sharing API credentials.

## 6. Google Ads API Usage

The platform uses OAuth 2.0 authentication and the official Google Ads API
through the Google Ads MCP Server integration layer.

Critical read-only functionality includes:

| API capability | Purpose | Access pattern |
|---|---|---|
| `GoogleAdsService.Search` | Paginated retrieval of resources and metrics | Read-only reporting |
| `GoogleAdsService.SearchStream` | Efficient retrieval of larger report result sets | Read-only reporting |
| Google Ads Query Language (GAQL) | Campaign, ad group, keyword, and search-term queries | Read-only reporting |
| Resource metadata | Identification of supported fields, metrics, and segments | Read-only metadata |

Retrieved data includes:

- campaign ID, name, status, and advertising channel type;
- ad group ID, name, and status;
- keyword and search-term performance;
- impressions;
- clicks;
- cost;
- conversions;
- conversion value;
- click-through rate; and
- average cost per click, where applicable.

The backend exposes only reporting and metadata functions. No write operation is
available through the dashboard.

## 7. Data Access and Account Authorization

The platform accesses only Google Ads accounts that a client has explicitly
authorized for the reporting project.

Access rules:

- Client authorization is required before an account is configured.
- Each configured customer ID is associated with the corresponding client
  project.
- Every report request is checked against the authenticated user's permitted
  account scope.
- Requests for unknown or unauthorized customer IDs are rejected.
- A client user cannot query or view another client's account data.
- Internal users access client data only when required to deliver the contracted
  analysis and reporting service.

## 8. Users and Permissions

The platform supports three user groups:

### Operator

The operator administers the reporting service, client projects, and authorized
account configuration.

### Authorized Internal Employees

Internal employees can access only the client projects required for their
assigned reporting work.

### Authorized Client Users

Client users can sign in to view reports associated only with their own
authorized Google Ads accounts. Client access does not include the developer
token, OAuth credentials, raw API credentials, or campaign modification
functions.

There is no public self-service registration.

## 9. Data Handling and Storage

Reporting data is retrieved on demand. Stored information is limited to what is
required to provide account-specific reporting:

- client project and account configuration;
- authorization references;
- limited cached reporting metrics;
- report generation metadata; and
- basic security and audit records.

The platform does not intentionally collect consumer personal information from
Google Ads. The reporting workflow focuses on aggregated advertising
performance data.

Data handling controls include:

- credentials are handled server-side and are not exposed to the frontend;
- reporting data is logically separated by client project and account;
- cached data is retained only for operational reporting needs;
- access is limited to authenticated and authorized users; and
- Google Ads data is not sold or disclosed to unrelated third parties.

## 10. Security Measures

Security controls include:

- OAuth 2.0 authorization for Google Ads account access;
- backend-only communication with the Google Ads API;
- no frontend exposure of developer tokens or OAuth credentials;
- authentication for internal and client users;
- account-level authorization checks on every report request;
- separation of client reporting data;
- rejection of unknown or unauthorized customer IDs;
- restricted server-side secret configuration;
- basic audit records for reporting requests; and
- no automatic write actions against Google Ads entities.

## 11. Compliance Scope

The platform is designed as a read-only analytics and reporting service.

Compliance commitments:

- Google Ads accounts are accessed only after explicit client authorization.
- Each client can access only its own account-specific reporting data.
- Developer tokens and OAuth credentials are not shared with clients.
- Google Ads API access is not resold, sublicensed, or redistributed.
- The platform does not automatically create or modify accounts, campaigns,
  ads, keywords, bids, or budgets.
- The platform does not perform prohibited or unattended advertising
  automation.
- Data analysis and reporting are provided under a project-based service
  agreement.

## 12. Current Scale and Refresh Model

The current implementation supports:

- two client-authorized Google Ads accounts;
- approximately four active campaigns;
- project-based analysis and reporting; and
- on-demand data refresh when an authorized user requests or updates a report.

The platform does not claim automatic daily synchronization.

## 13. Future Improvements

Future improvements remain within the read-only analytics and reporting scope:

- enhanced account-specific dashboard filters;
- additional historical comparison views;
- improved audit records;
- configurable reporting exports;
- improved client project administration; and
- read-only anomaly indicators.

Any future write capability or campaign automation would require separate design
and compliance review before implementation.

## 14. Conclusion

The Arshow Google Ads Analytics Dashboard is a restricted-access reporting
platform used to provide project-based data analysis and reporting services to
cross-border e-commerce sellers.

It accesses only client-authorized Google Ads accounts, supports internal and
authorized client users, separates client reporting data, and keeps developer
tokens and OAuth credentials out of frontend access. Its Google Ads API usage
is read-only and limited to reporting and metadata retrieval.
