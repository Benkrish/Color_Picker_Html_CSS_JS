const zodiac = document.getElementById('zodiac')
const body = document.body

function generateColor() {
  switch (zodiac.value) {
    case 'Capricorn':
      body.style.backgroundColor = 'red'
      break
    case 'Aquarius':
      body.style.backgroundColor = '#0099cc'
      break
    case 'Pisces':
      body.style.backgroundColor = 'purple'
      break
    case 'Sagittarius':
      body.style.backgroundColor = 'gold'
      break
    case 'Aries':
      body.style.backgroundColor = 'orange'
      break
    case 'Taurus':
      body.style.backgroundColor = 'green'
      break
    case 'Gemini':
      body.style.backgroundColor = 'blue'
      break
    case 'Leo':
      body.style.backgroundColor = '#ff6347'
      break
    case 'Virgo':
      body.style.backgroundColor = 'grey'
      break
    case 'Libra':
      body.style.backgroundColor = '#8e45b2'
      break
    case 'Scorpio':
      body.style.backgroundColor = 'maroon'
      break
    case 'Cancer':
      body.style.backgroundColor = '#a15cda'
      break
    default:
      alert('Please select a  correct zodiac sign')
      body.style.backgroundColor = ''
  }
}
