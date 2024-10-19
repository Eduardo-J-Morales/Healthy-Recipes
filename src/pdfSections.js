export const pdfSections = [
  { id: 'introduction', name: 'Introduction', startPage: 1, endPage: 1 },
  { id: 'chapter1', name: 'Chapter 1', startPage: 2, endPage: 5 },
  { id: 'chapter2', name: 'Chapter 2', startPage: 6, endPage: 10 },
  { id: 'conclusion', name: 'Conclusion', startPage: 11, endPage: 12 },
];

export const getTotalPages = () => {

    return Math.max(...pdfSections.map(section => section.endPage));

};

export const getSectionById = (id) => {

    return pdfSections.find(section => section.id===id);

}