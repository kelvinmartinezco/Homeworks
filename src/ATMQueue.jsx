"use client"

import { useState } from "react"
import styles from "./styles/ATMQueue.module.scss"

export default function ATMQueue() {
  const [queue, setQueue] = useState([
    {
      id: 1,
      name: "Carlos Pérez",
      amount: 50000,
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      name: "Ana Gómez",
      amount: 200000,
      timestamp: new Date().toLocaleTimeString(),
    },
  ])

  const [newPerson, setNewPerson] = useState({ name: "", amount: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!newPerson.name.trim()) {
      newErrors.name = "El nombre es requerido"
    } else if (newPerson.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres"
    }

    if (!newPerson.amount) {
      newErrors.amount = "El monto es requerido"
    } else if (Number(newPerson.amount) <= 0) {
      newErrors.amount = "El monto debe ser mayor a 0"
    } else if (Number(newPerson.amount) > 1000000) {
      newErrors.amount = "El monto no puede exceder $1,000,000"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewPerson({ ...newPerson, [name]: value })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const addToQueue = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    const newEntry = {
      id: Date.now(),
      name: newPerson.name.trim(),
      amount: Number(newPerson.amount),
      timestamp: new Date().toLocaleTimeString(),
    }

    setQueue((prevQueue) => [...prevQueue, newEntry])
    setNewPerson({ name: "", amount: "" })
    setIsSubmitting(false)
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>ATM Queue</h1>
        <p className={styles.subtitle}>Sistema de Cola del Cajero Automático</p>
      </header>

      <form onSubmit={addToQueue} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            placeholder=" "
            value={newPerson.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.error : ""}`}
            disabled={isSubmitting}
            required
          />
          <label className={styles.inputLabel}>Nombre completo</label>
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.inputGroup}>
          <input
            type="number"
            name="amount"
            placeholder=" "
            value={newPerson.amount}
            onChange={handleChange}
            className={`${styles.input} ${errors.amount ? styles.error : ""}`}
            disabled={isSubmitting}
            min="1"
            max="1000000"
            required
          />
          <label className={styles.inputLabel}>Monto a retirar (COP)</label>
          {errors.amount && <span className={styles.errorText}>{errors.amount}</span>}
        </div>

        <button
          type="submit"
          className={`${styles.submitButton} ${isSubmitting ? styles.loading : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Agregando..." : "Añadir a la Cola"}
        </button>
      </form>

      <section className={styles.queueSection}>
        <div className={styles.queueHeader}>
          <h2 className={styles.queueTitle}>Cola Actual</h2>
          <span className={styles.queueCount}>
            {queue.length} {queue.length === 1 ? "persona" : "personas"}
          </span>
        </div>

        {queue.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🏧</div>
            <p className={styles.emptyText}>No hay personas en la cola</p>
          </div>
        ) : (
          <ol className={styles.queueList}>
            {queue.map((person, index) => (
              <li key={person.id} className={styles.queueItem}>
                <div className={styles.itemHeader}>
                  <div className={styles.itemPosition}>{index + 1}</div>
                  <h3 className={styles.itemName}>{person.name}</h3>
                </div>
                <p className={styles.itemAmount}>{formatCurrency(person.amount)}</p>
                <p className={styles.itemTime}>Agregado a las {person.timestamp}</p>
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  )
}
