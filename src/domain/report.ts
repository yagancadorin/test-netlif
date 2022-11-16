export interface IReport {
  fapiInteractionId: string
  endpoint: string
  statusCode: number
  httpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  correlationId: string
  additionalInfo?: {
    consentId: string
  }
  timestamp: string
  processTimespan: number
  receiverOrgId: string
  receiverSSAId: string
  transmitterOrgId: string
  transmitterASId: string
  endpointUriPrefix: string
}
