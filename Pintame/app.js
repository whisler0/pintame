function navigateToMenu() {
    document.getElementById('home-screen').classList.remove('active');
    document.getElementById('menu-screen').classList.add('active');
    document.getElementById('menu-screen').classList.remove('hidden');
  }
  
  function openTab(tabName) {
    document.getElementById('menu-screen').classList.remove('active');
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById(`${tabName}-screen`).classList.add('active');
    document.getElementById(`${tabName}-screen`).classList.remove('hidden');
  }
  
  function navigateBack() {
    const screens = ['medicion', 'diseno', 'ejecucion'];
    screens.forEach(screen => {
      document.getElementById(`${screen}-screen`).classList.remove('active');
      document.getElementById(`${screen}-screen`).classList.add('hidden');
    });
    document.getElementById('menu-screen').classList.add('active');
    document.getElementById('menu-screen').classList.remove('hidden');
  }
    