module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {       
    extend: {
      screens: {
        'mb': {'max': '639px'},
        'rtm': {'min': '640px', 'max': '767px'},    // rotate mobile
        'xmb': {'max': '767px'},
        'landscape': {'min': '768px', 'max': '1023px'},
        'sxl': {'max': '1279px'},                   // small screen mode than xl   
        'extScreen' : {'min' : '1930px'},           // extra Screen
      },
      colors:{
        bgTextColor: '#696969',
        orange: '#faa200',
        lightOrange: '#faaf19',
        blurGrey: '#fafbfd',
        btnColor : '#545afa',
        darkYellow : '#faa200',
      },
      letterSpacing:{
        customSpc: '0.2rem',
      },
      fontSize:{
        font4xl: '2rem !important',    // menu - i font
        cusH1: 'calc(1.5rem + 3vw)',
        cusH2: 'calc(1.5rem + 2vw)',
        cusH3: 'calc(2rem + 1vw)',
        '32px' : '32px',
      },
      width:{
        '3%' : '3%',
        '4%' : '4%',
        '18%' : '18%',
        '45%' : '45%',
        '55%' : '55%',
        '70%' : '70%',
        '90%' : '90%',
        '13vw' : '13vw',
        '200px' : '200px',
      },
      height:{
        '140px': '140px',
        '80px' : '80px',
        '60px' : '60px',
        '30vw' : '30vw',
        '20vw' : '20vw',
        '10vw' : '10vw',
        '70vw' : '70vw',
        '95vw' : '95vw',
      },
      padding:{
        '1.05vw' : '1.05vw',
        '10px' : '10px',
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5.5vw' : '5.5vw',
        '6vw' : '6vw',
        '7vw' : '7vw',
        '8vw' : '8vw',
        '10vw' : '10vw',
        '20vw' : '20vw',
        '100vw' : '100vw',
      },
      margin:{
        '20px' : '20px',
        '-2%' : '-2%',
        '-3%' : '-3%',
        '-4%' : '-4%',
        '-8.55%' : '-8.55%',
        '-10%' : '-10%',
        '-17%' : '-17%',
        '-21%' : '-21%',
        '-25%' : '-25%',
        '3%' : '3%',
        '5%' : '5%',
        '19%' : '19%',
        '25%' : '25%',
        '38%' : '38%',
        '0.5vw' : '0.5vw',
        '6vw' : '6vw',
        '8vw' : '8vw',
        '25vw' : '25vw',
        '1.7vw' : '1.7vw',
        '-26vw' : '-26vw',
        '-28.5vw' : '-28.5vw',
        '18vw' : '18vw',
      },
      inset:{
        '-4%' : '-4%',
        '5%' : '5%',
        '11%' : '11%',
        '15%' : '15%',
        'initial' : 'initial',
      },
      lineHeight:{
        '1' : '1',
        '1.2' : '1.2',
        '3.5rem' : '3.5rem',
      },
      backgroundImage:{
        'sprites' : 'url(../assets/images/sprites.webp)',
        'heroImg' : 'url(../assets/images/home/hero.webp)',
        'pathImg' : 'url(../assets/images/home/path.svg)',
        'learnmoreImg' : 'url(../assets/images/home/learnmore.webp)',
        'whyBg' : 'url(../assets/images/home/why_bg.svg)',
        'featuredBg' : 'url(../assets/images/home/featuredbg.webp)',
        'feedbackBg' : 'url(../assets/images/home/feedbackbg.webp)',
        'forum1Img' : 'url(../assets/images/home/forum1.webp)',
        'forum2Img' : 'url(../assets/images/home/forum2.webp)',
        'footerBg' : 'url(../assets/images/footer/bg.webp)',        
      },
      backgroundSize: {
        '50%' : '50%',
      },
      backgroundPosition: {
        'mbHeroImg' : 'center top 6rem',
      },
      zIndex:{
        '-10' : '-10',
      },
    },
    
  },
  variants: {     
    extend: {      
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
