import React from 'react';
import { useAssessmentStore } from '../../stores/assessmentStore';
import {
  determinePrimaryConcern,
  determineSecondaryConcern,
  getPotentialImpacts,
  getRecommendedPathway,
  getEstimatedDuration,
} from '../../utils/scoring';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';

interface AdvisoryRoutingProps {
  onComplete: () => void;
}

export const AdvisoryRouting: React.FC<AdvisoryRoutingProps> = ({ onComplete }) => {
  const { riskScores, businessInfo } = useAssessmentStore();

  const primaryConcern = determinePrimaryConcern(riskScores || {});
  const secondaryConcern = determineSecondaryConcern(riskScores || {});
  const impacts = getPotentialImpacts(primaryConcern, secondaryConcern);
  const pathway = getRecommendedPathway(primaryConcern, secondaryConcern);
  const duration = getEstimatedDuration(primaryConcern, secondaryConcern);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Business Impact Assessment</h2>
          <p className="text-gray-600">Your personalized advisory pathway</p>
        </div>

        {/* Impact Warning */}
        <Card className="bg-orange-50 border-l-4 border-orange-500 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Without addressing {primaryConcern} & {secondaryConcern} readiness, your business may face:
          </h3>
          <ul className="space-y-2">
            {impacts.map((impact, index) => (
              <li key={index} className="text-gray-700">
                {impact}
              </li>
            ))}
          </ul>
        </Card>

        {/* Recommended Pathway */}
        <Card className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Recommended Advisory Pathway</h3>
          <div className="space-y-4">
            {pathway.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  {index < pathway.length - 1 && (
                    <div className="w-1 h-8 bg-blue-300 mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-4">
                  <p className="font-semibold text-gray-900">{step}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Comprehensive assessment and strategic recommendations
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Timeline */}
        <Card className="mb-8 bg-blue-50">
          <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">Estimated Timeline</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{duration}</p>
          <p className="text-sm text-gray-600 mt-2">
            Based on your assessment and recommended pathway
          </p>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            fullWidth
            size="lg"
            onClick={onComplete}
            className="bg-green-600 hover:bg-green-700"
          >
            Book 1:1 Advisory Session
          </Button>
          <Button
            fullWidth
            variant="outline"
            onClick={() => {
              // In a real app, this would generate a PDF
              alert(`Assessment Report for ${businessInfo?.name} has been downloaded.`);
            }}
          >
            Download Assessment Report
          </Button>
        </div>

        {/* Assessment Summary */}
        <Card className="mt-8 bg-gray-50">
          <p className="text-sm font-semibold text-gray-600 uppercase mb-4">Assessment Summary</p>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Business:</strong> {businessInfo?.name}</p>
            <p><strong>Industry:</strong> {businessInfo?.industry}</p>
            <p><strong>Primary Concern:</strong> <span className="capitalize font-semibold text-blue-600">{primaryConcern}</span></p>
            <p><strong>Secondary Concern:</strong> <span className="capitalize font-semibold text-blue-600">{secondaryConcern}</span></p>
            <p><strong>Assessment Date:</strong> {new Date().toLocaleDateString()}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};