import React from 'react';
import { useForm } from 'react-hook-form';
import { useAssessmentStore } from '../../stores/assessmentStore';
import { BusinessInfo } from '../../types/assessment';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';

interface EntryAssessmentProps {
  onNext: () => void;
}

export const EntryAssessment: React.FC<EntryAssessmentProps> = ({ onNext }) => {
  const { register, handleSubmit, watch } = useForm<BusinessInfo>({
    defaultValues: {
      name: 'PT ABC',
      industry: 'Manufacturing',
      businessAge: 15,
      employees: 120,
      priority: 'growth',
    },
  });

  const setBusinessInfo = useAssessmentStore((state) => state.setBusinessInfo);

  const onSubmit = (data: BusinessInfo) => {
    setBusinessInfo(data);
    onNext();
  };

  const priority = watch('priority');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome</h1>
          <p className="text-gray-600">Let's start with some basic information about your business</p>
        </div>

        <Card className="mb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Business Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name
              </label>
              <input
                {...register('name')}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your business name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry
              </label>
              <input
                {...register('industry')}
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Manufacturing, Retail, Services"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Age (Years)
                </label>
                <input
                  {...register('businessAge', { valueAsNumber: true })}
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <input
                  {...register('employees', { valueAsNumber: true })}
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Employees"
                />
              </div>
            </div>

            {/* Priority Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                What is your current priority?
              </label>
              <div className="space-y-3">
                {[
                  { value: 'growth', label: 'Business Growth' },
                  { value: 'stability', label: 'Business Stability' },
                  { value: 'transition', label: 'Leadership Transition' },
                  { value: 'retirement', label: 'Retirement / Exit' },
                  { value: 'legacy', label: 'Family Legacy' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      {...register('priority')}
                      type="radio"
                      value={option.value}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Display Summary */}
            <div className="bg-blue-50 rounded-lg p-4 mt-6">
              <p className="text-sm text-gray-600">
                <strong>Business Name:</strong> {watch('name')}<br />
                <strong>Industry:</strong> {watch('industry')}<br />
                <strong>Business Age:</strong> {watch('businessAge')} years<br />
                <strong>Employees:</strong> {watch('employees')}<br />
                <strong>Priority:</strong> {priority && priority.charAt(0).toUpperCase() + priority.slice(1)}
              </p>
            </div>

            <Button type="submit" fullWidth size="lg">
              Start Assessment
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};