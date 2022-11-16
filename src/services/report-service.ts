import axiosClient from 'libs/axios'
import { IReport } from 'domain/report'

interface ReportServiceParams {
  orderBy: string
}

export class ReportService {
  static async getAll({
    orderBy,
  }: ReportServiceParams): Promise<Array<IReport>> {
    const params = orderBy

    const response = await axiosClient.get('')

    const reports: Array<IReport> = []

    reports.push({
      fapiInteractionId: '731d7aa0-09c3-4fa5-b024-905934d794e7',
      endpoint: '/open-insurance/insurance-rural/v1/{policyId}/claim',
      statusCode: 200,
      httpMethod: 'GET',
      correlationId: '577869e5-4c63-4b19-9235-a18d22c80986',
      additionalInfo: {
        consentId: 'urn:instituicao:e063bcb3-6e9b-473b-9ef1-48ad6709a434',
      },
      timestamp: '2022-11-07T17:26:32Z',
      processTimespan: 120,
      receiverOrgId: '1fb79963-4bff-4204-9370-93aceb8a2f0d',
      receiverSSAId: '2a59c2a3-529f-41c6-97e3-77395e9951ca',
      transmitterOrgId: 'ff66b95a-d817-4fbe-949a-c5912e240189',
      transmitterASId: 'f8cd7b48-197d-419b-8680-f42226111b6f',
      endpointUriPrefix: 'https://openbanking.instituicao.com.br',
    })

    return reports
  }
}
