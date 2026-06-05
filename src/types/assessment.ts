// Assessment data types
export interface BusinessInfo {
  name: string;
  industry: string;
  businessAge: number;
  employees: number;
  priority: 'growth' | 'stability' | 'transition' | 'retirement' | 'legacy';
}

export interface DiagnosticResponse {
  question_id: string;
  section: 'growth' | 'governance' | 'successor' | 'exit' | 'legacy';
  answer: string;
  score: number;
}

export interface RiskScores {
  growth: number;
  governance: number;
  successor: number;
  exit: number;
  legacy: number;
}

export interface AssessmentResult {
  businessInfo: BusinessInfo;
  responses: DiagnosticResponse[];
  riskScores: RiskScores;
  primaryConcern: string;
  secondaryConcern: string;
  potentialImpacts: string[];
  recommendedPathway: string[];
  estimatedDuration: string;
}