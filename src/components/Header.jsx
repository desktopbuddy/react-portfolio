export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div class="header-title">Huaquin Anchondo</div>
      <nav>
        <div class="nav-item">
          <a 
            href="#"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
              About Me
            </a>
        </div>
        <div class="nav-item">
          <a
            href="#"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </div>
        <div class="nav-item">
        <a
            href="#"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </div>
        <div class="nav-item">
        <a
            href="#"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}