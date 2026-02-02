// Publications Loader using Semantic Scholar API
// This script fetches publications for an author from Semantic Scholar API
// Place this in assets/js/publications.js

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('publications-container');
  const loadingElement = document.createElement('p');
  loadingElement.textContent = 'Loading publications...';
  
  if (!container) return;
  
  container.appendChild(loadingElement);
  
  // TODO: Replace with your Semantic Scholar ID if you have publications
  // const semanticScholarAuthorId = 'YOUR_SEMANTIC_SCHOLAR_ID';
  
  // For now, display a placeholder message
  displayPlaceholder();
  
  function displayPublications(papers) {
    // Remove loading message
    container.removeChild(loadingElement);
    
    if (!papers || papers.length === 0) {
      const noPublicationsMessage = document.createElement('p');
      noPublicationsMessage.textContent = 'No publications found.';
      container.appendChild(noPublicationsMessage);
      return;
    }
    
    // Sort papers by year (newest first)
    papers.sort((a, b) => (b.year || 0) - (a.year || 0));
    
    // Group papers by type (Journal Articles vs. Conference Papers)
    const journals = papers.filter(paper => paper.venue && !paper.venue.toLowerCase().includes('conference'));
    const conferences = papers.filter(paper => paper.venue && paper.venue.toLowerCase().includes('conference'));
    
    // Display journal articles
    if (journals.length > 0) {
      addSectionHeader(container, 'Journal Articles');
      const journalList = document.createElement('ul');
      journalList.className = 'publication-list';
      journals.forEach(paper => addPaperToList(journalList, paper));
      container.appendChild(journalList);
    }
    
    // Display conference papers
    if (conferences.length > 0) {
      addSectionHeader(container, 'Conference Papers');
      const conferenceList = document.createElement('ul');
      conferenceList.className = 'publication-list';
      conferences.forEach(paper => addPaperToList(conferenceList, paper));
      container.appendChild(conferenceList);
    }
    
    // Add last updated information
    const lastUpdated = document.createElement('p');
    lastUpdated.className = 'last-updated';
    lastUpdated.textContent = `Last updated: ${new Date().toLocaleDateString()}`;
    container.appendChild(lastUpdated);
  }
  
  function addSectionHeader(container, title) {
    const header = document.createElement('h2');
    header.textContent = title;
    container.appendChild(header);
  }
  
  function addPaperToList(list, paper) {
    const listItem = document.createElement('li');
    listItem.className = 'publication-item';
    
    // Title
    const titleDiv = document.createElement('div');
    titleDiv.className = 'publication-title';
    
    if (paper.url) {
      const titleLink = document.createElement('a');
      titleLink.href = paper.url;
      titleLink.textContent = paper.title;
      titleDiv.appendChild(titleLink);
    } else {
      titleDiv.textContent = paper.title;
    }
    
    listItem.appendChild(titleDiv);
    
    // Authors
    if (paper.authors && paper.authors.length > 0) {
      const authorsDiv = document.createElement('div');
      authorsDiv.className = 'publication-authors';
      authorsDiv.textContent = paper.authors.map(author => author.name).join(', ');
      listItem.appendChild(authorsDiv);
    }
    
    // Venue and year
    const venueDiv = document.createElement('div');
    venueDiv.className = 'publication-venue';
    
    if (paper.venue) {
      const venueEm = document.createElement('em');
      venueEm.textContent = paper.venue;
      venueDiv.appendChild(venueEm);
      
      if (paper.year) {
        venueDiv.appendChild(document.createTextNode(`, ${paper.year}`));
      }
    } else if (paper.year) {
      venueDiv.textContent = `${paper.year}`;
    }
    
    // Citations
    if (paper.citationCount && paper.citationCount > 0) {
      const citationsSpan = document.createElement('span');
      citationsSpan.className = 'publication-citations';
      citationsSpan.innerHTML = `<i class="fa fa-quote-right" aria-hidden="true"></i> ${paper.citationCount}`;
      venueDiv.appendChild(citationsSpan);
    }
    
    listItem.appendChild(venueDiv);
    
    // Links
    const linksDiv = document.createElement('div');
    linksDiv.className = 'publication-links';
    
    // DOI link
    if (paper.externalIds && paper.externalIds.DOI) {
      const doiLink = document.createElement('a');
      doiLink.href = `https://doi.org/${paper.externalIds.DOI}`;
      doiLink.className = 'publication-link';
      doiLink.innerHTML = '<i class="fa fa-external-link" aria-hidden="true"></i> DOI';
      linksDiv.appendChild(doiLink);
    }
    
    // Paper link
    if (paper.url) {
      const paperLink = document.createElement('a');
      paperLink.href = paper.url;
      paperLink.className = 'publication-link';
      paperLink.innerHTML = '<i class="fa fa-file-text" aria-hidden="true"></i> Paper';
      linksDiv.appendChild(paperLink);
    }
    
    if (linksDiv.children.length > 0) {
      listItem.appendChild(linksDiv);
    }
    
    list.appendChild(listItem);
  }
  
  function handleError(error) {
    container.removeChild(loadingElement);
    
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.textContent = `Error loading publications: ${error.message}`;
    container.appendChild(errorMessage);
    
    console.error('Error loading publications:', error);
  }
  
  function displayPlaceholder() {
    // Remove loading message
    if (container.contains(loadingElement)) {
      container.removeChild(loadingElement);
    }
    
    const message = document.createElement('p');
    message.textContent = 'No publications listed yet.';
    container.appendChild(message);
  }
});
