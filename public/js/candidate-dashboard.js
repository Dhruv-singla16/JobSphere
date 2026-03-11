// ============================================
// CANDIDATE DASHBOARD JAVASCRIPT
// ============================================

// Sample jobs data
const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    logo: 'TS',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100k - $140k',
    tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    posted: '2 days ago',
    description: 'We are looking for an experienced Full Stack Developer to join our growing team. You will be responsible for developing and maintaining web applications using modern technologies.',
    requirements: ['5+ years of experience', 'Strong JavaScript skills', 'Experience with React and Node.js', 'Knowledge of MongoDB'],
    applied: false
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Creative Agency',
    logo: 'CA',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$80k - $110k',
    tags: ['Figma', 'Adobe XD', 'UI Design', 'Prototyping'],
    posted: '3 days ago',
    description: 'Join our creative team to design beautiful and intuitive user interfaces for web and mobile applications.',
    requirements: ['3+ years of UI/UX experience', 'Proficiency in Figma and Adobe XD', 'Strong portfolio', 'Understanding of user-centered design'],
    applied: false
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'Cloud Systems',
    logo: 'CS',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $160k',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    posted: '1 week ago',
    description: 'We need a skilled DevOps Engineer to manage our cloud infrastructure and implement automation solutions.',
    requirements: ['4+ years DevOps experience', 'AWS certification preferred', 'Experience with Docker and Kubernetes', 'Strong scripting skills'],
    applied: false
  },
  {
    id: 4,
    title: 'Product Manager',
    company: 'StartUp Co.',
    logo: 'SC',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90k - $130k',
    tags: ['Product Strategy', 'Agile', 'Analytics', 'Leadership'],
    posted: '4 days ago',
    description: 'Lead product development and strategy for our innovative SaaS platform.',
    requirements: ['3+ years product management', 'Experience with Agile methodologies', 'Strong analytical skills', 'Excellent communication'],
    applied: false
  },
  {
    id: 5,
    title: 'Frontend Developer',
    company: 'Digital Solutions',
    logo: 'DS',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$85k - $115k',
    tags: ['React', 'TypeScript', 'CSS', 'Redux'],
    posted: '5 days ago',
    description: 'Build responsive and performant web applications using React and modern frontend technologies.',
    requirements: ['3+ years frontend development', 'Expert in React and TypeScript', 'Strong CSS skills', 'Experience with state management'],
    applied: false
  },
  {
    id: 6,
    title: 'Data Scientist',
    company: 'Analytics Corp',
    logo: 'AC',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$110k - $150k',
    tags: ['Python', 'Machine Learning', 'SQL', 'TensorFlow'],
    posted: '1 week ago',
    description: 'Apply machine learning and statistical analysis to solve complex business problems.',
    requirements: ['PhD or Masters in related field', 'Strong Python skills', 'Experience with ML frameworks', 'Statistical analysis expertise'],
    applied: false
  },
  {
    id: 7,
    title: 'Mobile App Developer',
    company: 'App Studio',
    logo: 'AS',
    location: 'Remote',
    type: 'Contract',
    salary: '$95k - $125k',
    tags: ['React Native', 'iOS', 'Android', 'Firebase'],
    posted: '3 days ago',
    description: 'Develop cross-platform mobile applications using React Native for iOS and Android.',
    requirements: ['4+ years mobile development', 'React Native expertise', 'Published apps in stores', 'Knowledge of native modules'],
    applied: false
  },
  {
    id: 8,
    title: 'Backend Engineer',
    company: 'Tech Innovations',
    logo: 'TI',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$105k - $145k',
    tags: ['Python', 'Django', 'PostgreSQL', 'Redis'],
    posted: '2 days ago',
    description: 'Design and implement scalable backend systems and APIs for our platform.',
    requirements: ['5+ years backend development', 'Python and Django expertise', 'Database design skills', 'API development experience'],
    applied: false
  }
];

// Load jobs on page load
window.addEventListener('DOMContentLoaded', function() {
  loadJobs(jobs);
});

// Load jobs into grid
function loadJobs(jobsList) {
  const grid = document.getElementById('jobsGrid');
  grid.innerHTML = jobsList.map(job => `
    <div class="job-card" onclick="openJobModal(${job.id})">
      <div class="job-card-header">
        <div>
          <div class="company-logo">${job.logo}</div>
        </div>
      </div>
      <div class="job-title">${job.title}</div>
      <div class="company-name">${job.company}</div>
      <div class="job-meta">
        <div class="meta-item">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          ${job.location}
        </div>
        <div class="meta-item">
          <svg viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.1-.9-2-2-2H9C7.9 2 7 2.9 7 4v2H4C2.9 6 2 6.9 2 8v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-9-2h6v2H9V4zm11 16H4v-2h16v2zm0-5H4V8h3v1c0 .55.45 1 1 1s1-.45 1-1V8h6v1c0 .55.45 1 1 1s1-.45 1-1V8h3v7z"/></svg>
          ${job.type}
        </div>
        <div class="meta-item">
          <svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          ${job.posted}
        </div>
      </div>
      <div class="job-tags">
        ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="job-card-footer">
        <div class="salary">${job.salary}</div>
        <button class="btn-apply ${job.applied ? 'applied' : ''}" onclick="event.stopPropagation(); applyJob(${job.id})" ${job.applied ? 'disabled' : ''}>
          ${job.applied ? '✓ Applied' : 'Apply Now'}
        </button>
      </div>
    </div>
  `).join('');
}

// Open job details modal
function openJobModal(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  document.getElementById('modalJobTitle').textContent = job.title;
  document.getElementById('modalJobBody').innerHTML = `
    <div class="job-detail-section">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
        <div>
          <h4 style="font-size: 1.1rem; margin-bottom: 8px;">${job.company}</h4>
          <div class="job-meta">
            <div class="meta-item">
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              ${job.location}
            </div>
            <div class="meta-item">
              <svg viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.1-.9-2-2-2H9C7.9 2 7 2.9 7 4v2H4C2.9 6 2 6.9 2 8v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-9-2h6v2H9V4zm11 16H4v-2h16v2zm0-5H4V8h3v1c0 .55.45 1 1 1s1-.45 1-1V8h6v1c0 .55.45 1 1 1s1-.45 1-1V8h3v7z"/></svg>
              ${job.type}
            </div>
          </div>
        </div>
        <div class="salary" style="font-size: 1.1rem;">${job.salary}</div>
      </div>
    </div>

    <div class="job-detail-section">
      <h4>Job Description</h4>
      <p>${job.description}</p>
    </div>

    <div class="job-detail-section">
      <h4>Requirements</h4>
      <ul>
        ${job.requirements.map(req => `<li>${req}</li>`).join('')}
      </ul>
    </div>

    <div class="job-detail-section">
      <h4>Skills</h4>
      <div class="job-tags">
        ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>

    <button class="btn-apply ${job.applied ? 'applied' : ''}" style="width: 100%; padding: 12px; font-size: 0.9rem;" onclick="applyJob(${job.id})" ${job.applied ? 'disabled' : ''}>
      ${job.applied ? '✓ Applied' : 'Apply for this Position'}
    </button>
  `;

  document.getElementById('jobModal').classList.add('open');
}

// Close job modal
function closeJobModal() {
  document.getElementById('jobModal').classList.remove('open');
}

// Apply for job
function applyJob(jobId) {
  const job = jobs.find(j => j.id === jobId);
  if (!job || job.applied) return;

  if (confirm(`Apply for ${job.title} at ${job.company}?`)) {
    job.applied = true;
    
    // Update applied count
    const appliedCount = document.getElementById('appliedCount');
    appliedCount.textContent = parseInt(appliedCount.textContent) + 1;
    
    alert('Application submitted successfully!');
    
    // Reload jobs to show "Applied" status
    loadJobs(jobs);
    closeJobModal();
    
    // Add to applications table with cancel functionality
    addApplicationToTable(job);
  }
}

// Search jobs
function searchJobs() {
  const keyword = document.getElementById('searchKeyword').value.toLowerCase();
  const location = document.getElementById('searchLocation').value.toLowerCase();
  const type = document.getElementById('searchType').value;

  const filtered = jobs.filter(job => {
    const matchKeyword = !keyword || job.title.toLowerCase().includes(keyword) || 
                        job.tags.some(tag => tag.toLowerCase().includes(keyword));
    const matchLocation = !location || job.location.toLowerCase().includes(location);
    const matchType = !type || job.type === type;
    
    return matchKeyword && matchLocation && matchType;
  });

  loadJobs(filtered);
}

// Cancel application function
function cancelApplication(applicationId, jobTitle, company) {
  // Show confirmation dialog
  const confirmMessage = `Are you sure you want to cancel your application for "${jobTitle}" at ${company}?`;
  
  if (confirm(confirmMessage)) {
    // Find the application row
    const applicationRow = document.querySelector(`tr[data-application-id="${applicationId}"]`);
    
    if (applicationRow) {
      // Remove the row from the table
      applicationRow.remove();
      
      // Show success message
      alert(`Application for "${jobTitle}" has been cancelled successfully.`);
      
      // Update the applied count (decrease by 1)
      const appliedCount = document.getElementById('appliedCount');
      const currentCount = parseInt(appliedCount.textContent);
      appliedCount.textContent = currentCount - 1;
      
      // Find the corresponding job in the jobs array and mark as not applied
      const job = jobs.find(j => j.title === jobTitle);
      if (job) {
        job.applied = false;
        // Reload the jobs grid to show "Apply Now" button again
        loadJobs(jobs);
      }
    }
  }
}

// View application details
function viewApplication(applicationId) {
  // Find the application row to get job details
  const applicationRow = document.querySelector(`tr[data-application-id="${applicationId}"]`);
  if (!applicationRow) return;
  
  // Extract job information from the row
  const jobTitle = applicationRow.querySelector('.job-title').textContent;
  const company = applicationRow.cells[1].textContent;
  const appliedDate = applicationRow.cells[2].textContent;
  const status = applicationRow.querySelector('.status-badge').textContent;
  
  // Find the original job data for more details
  const job = jobs.find(j => j.title === jobTitle && j.company === company);
  
  // Create modal content
  const modalContent = `
    <div class="application-detail-section">
      <h4>Application Details</h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
        <div>
          <strong>Job Title:</strong><br>
          <span style="color: #1f4959; font-weight: 600;">${jobTitle}</span>
        </div>
        <div>
          <strong>Company:</strong><br>
          <span>${company}</span>
        </div>
        <div>
          <strong>Applied Date:</strong><br>
          <span>${appliedDate}</span>
        </div>
        <div>
          <strong>Application Status:</strong><br>
          <span class="status-badge ${getStatusClass(status)}">${status}</span>
        </div>
      </div>
    </div>

    ${job ? `
    <div class="application-detail-section">
      <h4>Job Details</h4>
      <div style="margin-bottom: 16px;">
        <strong>Location:</strong> ${job.location}<br>
        <strong>Job Type:</strong> ${job.type}<br>
        <strong>Salary:</strong> ${job.salary}
      </div>
      <div style="margin-bottom: 16px;">
        <strong>Required Skills:</strong><br>
        <div class="job-tags" style="margin-top: 8px;">
          ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div>
        <strong>Job Description:</strong><br>
        <p style="margin-top: 8px; line-height: 1.6; color: #555;">${job.description}</p>
      </div>
    </div>
    ` : ''}

    <div class="application-detail-section">
      <h4>Application Timeline</h4>
      <div class="timeline">
        <div class="timeline-item completed">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <strong>Application Submitted</strong><br>
            <small>${appliedDate}</small>
          </div>
        </div>
        <div class="timeline-item ${status === 'Pending' ? 'current' : 'completed'}">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <strong>Under Review</strong><br>
            <small>${status === 'Pending' ? 'Waiting for review' : 'Completed'}</small>
          </div>
        </div>
        <div class="timeline-item ${['Shortlisted', 'Interview Scheduled', 'Accepted'].includes(status) ? 'completed' : ''}">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <strong>Interview Process</strong><br>
            <small>${status === 'Shortlisted' ? 'Shortlisted for interview' : 
                    status === 'Interview Scheduled' ? 'Interview scheduled' : 
                    status === 'Accepted' ? 'Interview completed' : 'Pending'}</small>
          </div>
        </div>
        <div class="timeline-item ${status === 'Accepted' ? 'completed' : status === 'Not Selected' ? 'rejected' : ''}">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <strong>Final Decision</strong><br>
            <small>${status === 'Accepted' ? 'Congratulations! You got the job' : 
                    status === 'Not Selected' ? 'Application not selected' : 'Pending decision'}</small>
          </div>
        </div>
      </div>
    </div>

    ${status === 'Pending' ? `
    <div style="margin-top: 24px; padding: 16px; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
      <strong>⏳ Application Status:</strong> Your application is currently being reviewed by the company. You can still cancel this application if needed.
    </div>
    ` : ''}

    ${status === 'Interview Scheduled' ? `
    <div style="margin-top: 24px; padding: 16px; background: #d1ecf1; border-radius: 8px; border-left: 4px solid #17a2b8;">
      <strong>📅 Interview Scheduled:</strong> Congratulations! The company has scheduled an interview with you. Check your email for details.
    </div>
    ` : ''}
  `;
  
  // Show in the existing job modal (reuse the modal)
  document.getElementById('modalJobTitle').textContent = `Application: ${jobTitle}`;
  document.getElementById('modalJobBody').innerHTML = modalContent;
  document.getElementById('jobModal').classList.add('open');
}

// Helper function to get status CSS class
function getStatusClass(status) {
  switch(status.toLowerCase()) {
    case 'pending': return 'pending';
    case 'reviewed': return 'reviewed';
    case 'shortlisted': return 'shortlisted';
    case 'interview scheduled': return 'accepted';
    case 'not selected': return 'rejected';
    default: return 'pending';
  }
}

// Add new application to the table (called when user applies for a job)
function addApplicationToTable(job) {
  const tbody = document.getElementById('applicationsTableBody');
  const newApplicationId = Date.now(); // Simple ID generation
  
  const newRow = document.createElement('tr');
  newRow.setAttribute('data-application-id', newApplicationId);
  newRow.innerHTML = `
    <td class="job-title">${job.title}</td>
    <td>${job.company}</td>
    <td>Mar 6, 2026</td>
    <td><span class="status-badge pending">Pending</span></td>
    <td>
      <button class="btn-action" onclick="viewApplication(${newApplicationId})">View</button>
      <button class="btn-cancel" onclick="cancelApplication(${newApplicationId}, '${job.title}', '${job.company}')">Cancel</button>
    </td>
  `;
  
  // Add the new row at the top of the table
  tbody.insertBefore(newRow, tbody.firstChild);
}

// Switch tabs
function switchTab(tabName) {
  // Remove active class from all tabs and content
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  // Add active class to selected tab
  event.target.classList.add('active');
  document.getElementById(tabName + '-tab').classList.add('active');
}

// Logout
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    window.location.href = 'candidate.html';
  }
}