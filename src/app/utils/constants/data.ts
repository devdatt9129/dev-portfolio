import { mlTrading, genAIJudge, mtaCommutePal, fraudDetection } from './hero.const';
import tradingImg from '../images/roommatetinder.png';
import genAIJudgeImg from '../images/speaksphere.png';
import commutePalImg from '../images/queryfuel.png';
import fraudDetectionImg from '../images/queryfuel.png';
import intuit from '../images/intuit.jpeg'
import hpe from '../images/hpe.png'
import columbia from '../images/columbia.jpeg'
import covi from '../images/covi.png'
import tseries from '../images/tseries.png'
import adobe from '../images/adobe.png'
import jio from '../images/jio.png'

export const introData = {
  introLine: `Hi, I'm Devdatt Golwala. Currently pursuing my M.S. in Data Science at Columbia University, I'm passionate about Data Science, AI and Software Engineering.\nNew York, NY`,
  gitHubLink: 'https://github.com/devdatt9129',
  linkedInLink: 'https://www.linkedin.com/in/devdattgolwala/',
  sequence: [
    '👨‍💻 Data Scientist',
    2000,
    '👨‍💻 AI Engineer',
    2000,
    '👨‍💻 Software Developer',
    2000,
  ],
  gitHubUsername: 'devdatt9129',
};

export const aboutData = {
  aboutLine: 'An AI engineer designing personalized, scalable systems that bridge data and product.',
  aboutDescription: `Specialized in leveraging Machine Learning, AI and software engineering to solve complex challenges. Experienced across Finance, Healthcare and Enterprise AI with impactful roles at Intuit, Adobe and HPE`
};

export const experienceData = [
  {
    timeline: 'September 2025 – Present, New York, NY',
    companyName: 'Adobe',
    role: 'AI Researcher',
    logo: adobe,
    description: [
      'Building a personalized multimodal LLM pipeline for image editing using LLaVA, GPT-4o-Vision, and RAP (Retrieval-Augmented Personalization), leveraging Reddit PSR data, synthetic generation, and an agentic prompt-enhancement workflow.',
      'Modeling user personas in latent space from edit deltas and linguistic patterns to enable persona-aware, instruction-faithful, and style-consistent edits.'
    ],
  },
  {
    timeline: 'May 2025 – Aug 2025, San Diego, CA',
    companyName: 'Intuit',
    role: 'AI Science Intern',
    logo: intuit,
    description: [
      'Engineered a personalized tax topic recommendation system for TurboTax using Quantile Regression to predict time spent, reducing abandonment by 32%, lifting CTR by 60%, and increasing engagement by 45%.',
      'Distilled GPT-4.1 as teacher into a LLaMA-3.1-8B student via reflection-based training for tax-field extraction, improving alignment on complex tax fields from 56% to 83%, increasing recall by 52%, and reducing inference cost by 89%.',
    ],
  },
  {
    timeline: 'Jan 2025 – Present, New York, NY',
    companyName: 'Columbia University & University of North Carolina, Chapel Hill',
    role: 'Graduate Research Assistant – Robert N. Butler Columbia Aging Center',
    logo: columbia,
    description: [
      'Built a RAG-based biomedical Q&A system using GPT-4o, LangChain, and vector-based retrieval over research publications, achieving 81.2% top-3 document recall.',
      'Developed an ASR pipeline using the Whisper model to transcribe Add Health study audio, achieving 87.4% precision and 82.1% recall on cognitive assessment tasks.',
    ],
  },
  {
    timeline: 'Jan 2023 – Jul 2024, Bengaluru, IN',
    companyName: 'Hewlett-Packard Enterprise',
    role: 'Software Engineer I',
    logo: hpe,
    description: [
      'Developed a predictive maintenance microservice for HPE Proliant servers, decreasing downtime by 20%.',
      'Implemented Autoencoders and LSTMs for server temperature data modeling, improving anomaly detection accuracy.',
      'Built a backend framework automating log-to-JIRA defect mapping using spaCy, FastAPI, and ReactJS, cutting turnaround time from 3 days to 1 day.',
      'Streamlined log aggregation via Kafka and Grafana, reducing redundancy fourfold and issue resolution time by 35%.',
    ],
  },
  {
    timeline: 'Jun 2022 – Aug 2022, Mumbai, IN',
    companyName: 'Reliance Jio',
    role: 'Data Science Intern',
    logo: jio,
    description: [
      'Performed exception reporting of network performance KPIs for 12M+ international roaming subscribers, flagging deviations above 10%.',
      'Optimized event creation cycles from 45 to 15 minutes via Spark jobs, cutting reporting time by 67%.',
    ],
  }
];

export const projectData = [
  
   {
    img: tseries,
    title: 'Retail Demand Forecasting',
    description: [
      'Developed a two-stage forecasting pipeline on 1M+ retail transactions, integrating NLP-based product clustering (TF-IDF, UMAP, MiniBatchKMeans) with advanced time series models (Prophet, Bi-LSTM, ARIMA), achieving a MAPE as low as 7.65% for daily and weekly sales predictions.',
    ],
    link: 'https://github.com/devdatt9129/Retail-forecasting',
    stack: fraudDetection,
  },
  {
    img: covi,
    title: 'Covi-Gen',
    description: [
      'Built a Flask-based full-stack web app using a CNN (TensorFlow, Keras) to detect COVID-19 from chest X-rays with 99% accuracy.',
    ],
    link: 'https://github.com/devdatt9129/CoviGen',
    stack: mlTrading,
  }
];

export const contactData = {
  place: 'New York, NY',
  email: 'drg2172@columbia.edu',
};

export const footerData = {
  linkedIn: 'https://www.linkedin.com/in/devdattgolwala/',
  github: 'https://github.com/devdatt9129',
};
