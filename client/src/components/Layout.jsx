import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const Layout = ({ 
  children, 
  onSearch = () => {}, 
  onSelectRegion = () => {}, 
  onSelectSubregion = () => {}, 
  selectedRegion = null 
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onSearch={onSearch} 
        onSelectRegion={onSelectRegion}
        onSelectSubregion={onSelectSubregion}
        selectedRegion={selectedRegion}
      />
      <MainContent>{children}</MainContent>
      <Footer />
    </div>
  );
};

export default Layout;