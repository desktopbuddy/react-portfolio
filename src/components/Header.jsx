export default function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div class="header-title">Huaquin Anchondo</div>
      <nav>
        <div class="nav-item">
          <a href="#" onClick={() => handlePageChange('About')}>About Me</a>
        </div>
        <div class="nav-item">
          <a href="#" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
        </div>
        <div class="nav-item">
          <a href="#" onClick={() => handlePageChange('Contact')}>Contact</a>
        </div>
        <div class="nav-item">
          <a href="#" onClick={() => handlePageChange('Resume')}>Resume</a>
        </div>
      </nav>
    </header>
  )
}