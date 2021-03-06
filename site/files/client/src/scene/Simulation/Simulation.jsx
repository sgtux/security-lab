import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { simulationService } from '../../services'

export function Simulation() {

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0)
  const [plots, setPlost] = useState(0)

  const history = useHistory()

  function simulate() {
    simulationService.create({ description, amount: parseFloat(amount), plots: parseInt(plots) })
      .then(res => history.push(`/simulation-details/${res.id}`))
  }

  return (
    <div>
      <h3 className="page-title">Simule seu financiamento</h3>

      <form className="form-simulation">

        <span>Descrição da produto:</span>
        <input className="form-input" onChange={e => setDescription(e.target.value)} />

        <span>Valor total:</span>
        <input className="form-input" onChange={e => setAmount(e.target.value || 0)} />

        <span>Quantidade de parcelas:</span>
        <input className="form-input" onChange={e => setPlost(e.target.value || 0)} />

        <div style={{ textAlign: 'center' }}>
          <button type="button" onClick={() => simulate()} className="btn btn-simulation">Simular</button>
          <div style={{ marginTop: '5px', fontSize: '12px' }} >
            <Link to="simulation-list">Ver Simulações</Link>
          </div>
        </div>
      </form>
    </div>
  )
}