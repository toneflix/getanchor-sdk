import { BaseApi } from '../BaseApi'
import type {
  AnchorCollection,
  AnchorDocument,
  CreateReportInput,
  CreateStatementInput,
  IncludeQuery,
  Report,
  ReportListQuery,
  RequestOptions,
  Statement,
} from '../types'

export class Statements extends BaseApi {
  /**
   * Generate an account statement. Generation is asynchronous; download once
   * `statement.completed` arrives.
   *
   * HTTP POST /api/v1/statements
   * @see https://docs.getanchor.co/reference/generate-account-statement
   */
  async create(body: CreateStatementInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Statement>>('POST', '/api/v1/statements', { body, options })
  }

  /**
   * List statements. Paginated.
   *
   * HTTP GET /api/v1/statements
   * @see https://docs.getanchor.co/reference/list-statements
   */
  async list(query?: ReportListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Statement>>('GET', '/api/v1/statements', {
      query,
      options,
    })
  }

  /**
   * Fetch a statement.
   *
   * HTTP GET /api/v1/statements/{statementId}
   * @see https://docs.getanchor.co/reference/fetch-a-statement
   */
  async get(statementId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<Statement>>('GET', '/api/v1/statements/{statementId}', {
      params: { statementId },
      query,
      options,
    })
  }

  /**
   * Download a completed statement.
   *
   * HTTP GET /api/v1/statements/download/{statementId}
   * @see https://docs.getanchor.co/reference/download-a-statement
   */
  async download(statementId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<string>>(
      'GET',
      '/api/v1/statements/download/{statementId}',
      {
        params: { statementId },
        options,
      },
    )
  }
}

export class Reports extends BaseApi {
  /**
   * Generate a transaction-history or balance-summary report. Download once
   * the matching `*.reporting.completed` event arrives.
   *
   * HTTP POST /api/v1/reports
   * @see https://docs.getanchor.co/reference/create-a-report
   */
  async create(body: CreateReportInput, options?: RequestOptions) {
    return this.request<AnchorDocument<Report>>('POST', '/api/v1/reports', { body, options })
  }

  /**
   * List reports. Paginated.
   *
   * HTTP GET /api/v1/reports
   * @see https://docs.getanchor.co/reference/list-reports
   */
  async list(query?: ReportListQuery, options?: RequestOptions) {
    return this.request<AnchorCollection<Report>>('GET', '/api/v1/reports', { query, options })
  }

  /**
   * Fetch a report.
   *
   * HTTP GET /api/v1/reports/{reportId}
   * @see https://docs.getanchor.co/reference/fetch-a-report
   */
  async get(reportId: string, query?: IncludeQuery, options?: RequestOptions) {
    return this.request<AnchorDocument<Report>>('GET', '/api/v1/reports/{reportId}', {
      params: { reportId },
      query,
      options,
    })
  }

  /**
   * Download a completed report.
   *
   * HTTP GET /api/v1/reports/download/{reportId}
   * @see https://docs.getanchor.co/reference/download-a-report-document
   */
  async download(reportId: string, options?: RequestOptions) {
    return this.request<AnchorDocument<string>>('GET', '/api/v1/reports/download/{reportId}', {
      params: { reportId },
      options,
    })
  }
}
