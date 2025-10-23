/**
 * Sidebar configuration
 */
module.exports = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'SQL',
      items: [
        'sql/basic-queries',
        'sql/joins-and-subqueries',
        'sql/window-functions',
      ],
    },
    {
      type: 'category',
      label: 'Data Modeling',
      items: [
        'modeling/star-schema',
        'modeling/scd-type2',
      ],
    },
    {
      type: 'category',
      label: 'Performance',
      items: [
        'performance/query-optimization',
        'performance/indexing-strategies',
      ],
    },
    {
      type: 'category',
      label: 'Tips & Tricks',
      items: [
        'tips/naming-conventions',
        'tips/debugging',
      ],
    },
  ],
};
