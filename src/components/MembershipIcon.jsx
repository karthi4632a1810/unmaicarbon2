function MembershipIcon({ type }) {
  const commonProps = {
    className: 'membership-icon-svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': 'true',
  }

  if (type === 'institution') {
    return (
      <svg {...commonProps}>
        <path d="M3 10L12 5L21 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19 10V18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 19H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'heart') {
    return (
      <svg {...commonProps}>
        <path
          d="M12 19C12 19 5 14.5 5 10.2C5 8.2 6.6 6.7 8.5 6.7C10 6.7 11 7.4 12 8.6C13 7.4 14 6.7 15.5 6.7C17.4 6.7 19 8.2 19 10.2C19 14.5 12 19 12 19Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'hub') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="4.5" r="1.4" fill="currentColor" />
        <circle cx="19.5" cy="12" r="1.4" fill="currentColor" />
        <circle cx="12" cy="19.5" r="1.4" fill="currentColor" />
        <circle cx="4.5" cy="12" r="1.4" fill="currentColor" />
        <path d="M12 6.2V9.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17.8 12H14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 17.8V14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9.2 12H6.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'finance') {
    return (
      <svg {...commonProps}>
        <rect x="3.5" y="6.5" width="17" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 9.3H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 14.7H17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'protocol') {
    return (
      <svg {...commonProps}>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.5 7.2H13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7.2 10.5V13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13.5 10.5L10.5 13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'community') {
    return (
      <svg {...commonProps}>
        <circle cx="8" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 18.3C4.9 15.9 6.6 14.5 8.8 14.5H15.2C17.4 14.5 19.1 15.9 19.5 18.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'committee') {
    return (
      <svg {...commonProps}>
        <path d="M12 3.8L18.8 7.2V12.8C18.8 16.4 16.3 19.3 12 20.3C7.7 19.3 5.2 16.4 5.2 12.8V7.2L12 3.8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 8.4V12.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 15.2H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8V12L14.8 14.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default MembershipIcon
