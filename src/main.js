const c = window.FUNKO_CONFIG

document.documentElement.style.setProperty('--primario', c.colores.primario)
document.documentElement.style.setProperty('--acento', c.colores.acento)
document.documentElement.style.setProperty('--fondo', c.colores.fondo)
document.documentElement.style.setProperty('--texto', c.colores.texto)
document.documentElement.style.setProperty('--brasa', c.colores.brasa)

document.getElementById('coleccion').textContent = c.coleccion
document.getElementById('personaje').textContent = c.personaje
document.getElementById('subtitulo').textContent = c.subtitulo
document.getElementById('marca').textContent = c.marca

if (c.modo_3d === 'sketchfab' && c.sketchfab_id) {
  const div = document.getElementById('modelo')
  div.innerHTML = `
    <iframe
      title="Vista 3D — ${c.personaje}"
      src="https://sketchfab.com/models/${c.sketchfab_id}/embed?autospin=1&autostart=1&preload=1&ui_theme=dark"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      allowfullscreen
    ></iframe>
  `
}

const historiaEl = document.getElementById('historia')
c.historia.forEach((h) => {
  const card = document.createElement('article')
  card.className = 'historia-card'
  card.innerHTML = `
    <span class="historia-num">${h.num}</span>
    <h3>${h.titulo}</h3>
    <p>${h.texto}</p>
  `
  historiaEl.appendChild(card)
})

const fichaEl = document.getElementById('ficha')
const table = document.createElement('dl')
table.className = 'ficha-lista'
c.ficha.forEach((f) => {
  table.innerHTML += `<dt>${f.label}</dt><dd>${f.valor}</dd>`
})
fichaEl.appendChild(table)

document.getElementById('footer').textContent = c.footer
