var typed= new Typed(".text", {
    strings:["Software Developer", "ML Engineer", "Frontend Developer", "Backend Developer", "Student"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
document.addEventListener('DOMContentLoaded', function () {
    function triggerProgressBarAnimation() {
      const progressBars = document.querySelectorAll('.progress-bar');
  
      progressBars.forEach(bar => {
        bar.classList.toggle('animate');
      });
    }
  
    
    const skillsTab = document.getElementById('skillsLink');
    
    skillsTab.addEventListener('click', function () {
      triggerProgressBarAnimation();
    });
  });
  