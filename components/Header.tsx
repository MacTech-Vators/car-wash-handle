import React from 'react';
import styles from '../styles/Header.module.scss';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
     
     <div className={styles.headerRow}>
     <div className={styles.lefthead}>Reg Number: 2021/334559/08</div>
     <div className={styles.contact}>info@nacwo.org.za
        <p>087 802 9485 | 084 065 3080 | 084 777 9844</p>
      </div>
     <div className={styles.righthead}>www.nacwo.org.za</div>
     </div>
      
      <div className={styles.logoRow}>
      <div className={styles.logo}>
        <Image src="/Logo2.png" alt="NACWO Logo" width={330} height={82}/>
      </div>
      </div>
      <h1 className={styles.title}><p>Membership Application</p></h1>
    </header>
  );
};

export default Header;
