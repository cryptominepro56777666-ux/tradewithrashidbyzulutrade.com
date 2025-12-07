{
    id: 1,
    name: "Alex Thompson",
    roi: 87.5,
    followers: 15420,
    riskLevel: "Low",
    tradingStyle: "Scalping",
    country: "USA",
    tradeDuration: "2 years",
    description: "Specializes in quick scalping trades with high precision.",
    chartData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: Math.random() * 100 + 50
    }))
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    roi: 112.3,
    followers: 28750,
    riskLevel: "Medium",
    tradingStyle: "Swing",
    country: "Spain",
    tradeDuration: "3 years",
    description: "Focuses on swing trading with fundamental analysis.",
    chartData: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: Math.random() * 100 + 60
    }))
  },
  // Add more traders here... (I'll generate 25-40 in the actual implementation)
];
=======
// Function to generate mock traders
const generateMockTraders = (count) => {
  const names = [
    "Alex Thompson", "Maria Rodriguez", "John Chen", "Sarah Williams", "David Kumar",
    "Emma Johnson", "Michael Brown", "Lisa Davis", "Robert Wilson", "Anna Martinez",
    "James Garcia", "Jennifer Lee", "Daniel Kim", "Laura Taylor", "Mark Anderson",
    "Rachel White", "Kevin Harris", "Michelle Clark", "Steven Lewis", "Amanda Walker",
    "Christopher Hall", "Jessica Young", "Brian King", "Ashley Wright", "Matthew Lopez",
    "Olivia Hill", "Joshua Scott", "Sophia Green", "Andrew Adams", "Isabella Baker"
  ];

  const countries = ["USA", "Spain", "UK", "Germany", "France", "Italy", "Canada", "Australia", "Japan", "Brazil"];
  const styles = ["Scalping", "Swing", "Long-Term", "AI Hybrid", "Day Trading"];
  const riskLevels = ["Low", "Medium", "High"];
  const durations = ["1 year", "2 years", "3 years", "4 years", "5+ years"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[i % names.length],
    roi: Math.round((Math.random() * 150) * 10) / 10, // 0-150%
    followers: Math.floor(Math.random() * 50000) + 20, // 20-50020
    riskLevel: riskLevels[Math.floor(Math.random() * riskLevels.length)],
    tradingStyle: styles[Math.floor(Math.random() * styles.length)],
    country: countries[Math.floor(Math.random() * countries.length)],
    tradeDuration: durations[Math.floor(Math.random() * durations.length)],
    description: `Experienced ${styles[Math.floor(Math.random() * styles.length)].toLowerCase()} trader with ${durations[Math.floor(Math.random() * durations.length)]} of market experience.`,
    chartData: Array.from({ length: 30 }, (_, j) => ({
      date: new Date(Date.now() - (29 - j) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: Math.random() * 100 + 50 + Math.sin(j / 5) * 20 // Add some trend
    }))
  }));
};

export const mockTraders = generateMockTraders(30);
