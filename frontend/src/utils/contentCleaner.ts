export const cleanOCRText = (text: string) => {
  if (!text) return "";

  return text
    // 1. Remove weird "y" prefixes often found in bullet points
    .replace(/^y(?=[A-Z])/gm, '') 
    .replace(/\ny(?=[A-Z])/g, '\n')

    // 2. Remove page numbers/header fragments (e.g., "10.", "Human Reproduction")
    .replace(/^\d+\.\s*$/gm, '') 
    .replace(/Human Reproduction/gi, '')

    // 3. Remove "Observe the relationship", "Which of the following", etc. (Sidebar Quiz Questions)
    .replace(/Which of the following[\s\S]*?\?\s*(\(\d\).*?)+/g, '')
    .replace(/Observe the relationship[\s\S]*?\.\.\.\.\.\./g, '')
    .replace(/Which part of the testes[\s\S]*?\?/g, '')
    .replace(/What will be the affect[\s\S]*?\?/g, '')
    .replace(/What is the ploidy[\s\S]*?\?/g, '')

    // 4. Standardize bullet points (replace circles/dots with clean dashes)
    .replace(/[○y•●]/g, '—')

    // 5. Cleanup extra whitespace
    .replace(/\n\s*\n/g, '\n\n') 
    .trim();
};