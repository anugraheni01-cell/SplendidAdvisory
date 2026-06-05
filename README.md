# Splendid Advisory - Business Assessment Platform

Platform penilaian bisnis untuk mengidentifikasi prioritas bisnis dan memberikan rekomendasi advisory yang tepat.

## Flow Utama

1. **Entry Assessment** - Pengumpulan informasi dasar bisnis dan prioritas
2. **Diagnostic Questions** - Serangkaian pertanyaan diagnosis untuk scoring
3. **AI Analysis** - Analisis otomatis menghasilkan risk scores
4. **Counselor Insight** - Review dan insights dari counselor
5. **Impact Dashboard** - Visualisasi impact dan risk level
6. **Advisory Routing** - Rekomendasi pathway advisory yang tepat

## Technology Stack

- React 18+
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- React Hook Form (Form Management)

## Project Structure

```
src/
├── components/
│   ├── assessment/
│   │   ├── EntryAssessment.tsx
│   │   ├── DiagnosticQuestions.tsx
│   │   ├── AIAnalysis.tsx
│   │   ├── CounselorInsight.tsx
│   │   ├── ImpactDashboard.tsx
│   │   └── AdvisoryRouting.tsx
│   └── shared/
│       ├── ProgressBar.tsx
│       ├── Button.tsx
│       └── Card.tsx
├── stores/
│   ├── assessmentStore.ts
│   └── diagnosticStore.ts
├── types/
│   ├── assessment.ts
│   ├── diagnostic.ts
│   └── scoring.ts
├── utils/
│   ├── scoring.ts
│   ├── riskCalculation.ts
│   └── routing.ts
├── pages/
│   ├── AssessmentFlow.tsx
│   └── Dashboard.tsx
├── App.tsx
└── main.tsx
```

## Development

```bash
npm install
npm run dev
```

## License

MIT
