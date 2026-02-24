    const tabs = document.querySelectorAll(".filters button");
    const jobList = document.getElementById("jobList");
    const emptyState = document.getElementById("emptyState");
    
    const totalCount = document.getElementById("totalCount");
    const interviewCount = document.getElementById("interviewCount");
    const rejectedCount = document.getElementById("rejectedCount");
    const tabCount = document.getElementById("tabCount");
    
    let currentTab = "all";
    
    function getJobs() {
      return document.querySelectorAll(".job-card");
    }
    
    function updateDashboardCounts() {
      const jobs = getJobs();
      const interviewJobs = document.querySelectorAll(".job-card[data-status='interview']");
      const rejectedJobs = document.querySelectorAll(".job-card[data-status='rejected']");
    
      totalCount.textContent = jobs.length;
      interviewCount.textContent = interviewJobs.length;
      rejectedCount.textContent = rejectedJobs.length;
    }
    
    function updateTabCount() {
      let count = 0;
    
      getJobs().forEach(job => {
        const status = job.dataset.status || "all";
        if (currentTab === "all" || status === currentTab) {
          count++;
        }
      });
    
      tabCount.textContent = `${count} jobs`;
    }
    
    function filterJobs(tab) {
      let visible = 0;
    
      getJobs().forEach(job => {
        const status = job.dataset.status || "all";
    
        if (tab === "all" || status === tab) {
          job.style.display = "block";
          visible++;
        } else {
          job.style.display = "none";
        }
      });
    
      emptyState.style.display = visible === 0 ? "block" : "none";
    }

    tabs.forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
          tabs.forEach(btn => btn.classList.remove("active"));
          tabBtn.classList.add("active");
      
          currentTab = tabBtn.dataset.tab;
          filterJobs(currentTab);
          updateTabCount();
        });
      });
      
      jobList.addEventListener("click", e => {
        const card = e.target.closest(".job-card");
        if (!card) return;
      
        const badge = card.querySelector(".badge");
      
        if (e.target.classList.contains("interview")) {
          card.dataset.status = "interview";
          badge.textContent = "INTERVIEW";
          badge.className = "badge interview";
        }
      
        if (e.target.classList.contains("rejected")) {
          card.dataset.status = "rejected";
          badge.textContent = "REJECTED";
          badge.className = "badge rejected";
        }
      
        if (e.target.classList.contains("fa-trash-can")) {
          card.remove();
        }
      
        updateDashboardCounts();
        filterJobs(currentTab);
        updateTabCount();
      });
            
      updateDashboardCounts();
      filterJobs("all");
      updateTabCount();
