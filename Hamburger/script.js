const menuOpen = document.getElementById('menuOpen');
      const items = [
        document.getElementById('item1'),
        document.getElementById('item2'),
        document.getElementById('item3'),
        document.getElementById('item4'),
        document.getElementById('item5')
      ];
      let open = false;
      const menuIcon = document.getElementById('menuIcon');
      const closeIcon = document.getElementById('closeIcon');
      menuOpen.addEventListener('click', () => {
        open = !open;
        if (open) {
          menuIcon.style.display = 'none';
          closeIcon.style.display = 'inline';
          const radius = 120;
          const centerX = 0;
          const centerY = 0;
          const total = items.length;
          items.forEach((item, i) => {
            const angle = Math.PI * (i / (total - 1));
            const x = radius * Math.cos(angle);
            const y = Math.abs(radius * Math.sin(angle));
            item.style.transform = `translate(${x}px, ${y}px)`;
            item.style.opacity = '1';
          });
        } else {
          menuIcon.style.display = 'inline';
          closeIcon.style.display = 'none';
          items.forEach((item) => {
            item.style.transform = 'translate(0,0)';
            item.style.opacity = '0';
          });
        }
      });
      window.onload = () => {
        menuIcon.style.display = 'inline';
        closeIcon.style.display = 'none';
        items.forEach((item) => {
          item.style.transform = 'translate(40,40)';
          item.style.opacity = '0';
        });
      };