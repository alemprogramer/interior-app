import React, { Suspense, lazy, useState, useEffect, useContext } from 'react';
import { Modal } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Loaders from '../contexts';
import { Logo, NavItem } from '../loader/navbarLoader';
const MegaMenu = lazy(() => import('./MegaMenu'));

const LargeNavbar = ({ data }) => {
  const { loader } = useContext(Loaders);

  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(data);
    return () => {};
    // eslint-disable-next-line
  }, [services]);

  useEffect(() => {
    console.log(loader);
    setTimeout(() => {}, 2000);
    return () => {
      setServices([]);
    };
    // eslint-disable-next-line
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className='page-head'>
      <div className='rd-navbar-wrap'>
        <div className='header-bar-area rd-navbar rd-navbar-corporate-light rd-navbar-original rd-navbar-static rd-navbar--is-stuck'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 col-xl-2 col-sm-2 col-md-2 d-flex align-items-center'>
                <div className='logo-area overflow-hidden'>
                  {loader === true ? (
                    <Logo />
                  ) : (
                    <Link to='/'>
                      <img
                        title='Logo Designed By Nusrat Jahan Rizu'
                        src={`${process.env.PUBLIC_URL}/vendor/images/logo05.png`}
                        height='40'
                        alt='logo05'
                      />
                    </Link>
                  )}
                </div>
              </div>
              <div className='col-lg-10 col-md-10 col-sm-10 col-xl-10 text-right'>
                <div className='main-menu'>
                  <ul>
                    {loader === true ? (
                      [1, 2, 3, 4, 5, 6].map((d) => (
                        <li className='overflow-hidden' key={d}>
                          <NavItem />
                        </li>
                      ))
                    ) : (
                      <>
                        <li>
                          <Link to='/service' className='nav-link'>
                            Services
                          </Link>
                          <div className='mega-menu'>
                            <Suspense fallback={<p> Please wait ...</p>}>
                              {services.map((t) => (
                                <MegaMenu
                                  key={t.mainTitle}
                                  title={t.mainTitle}
                                  data={t.datas}
                                />
                              ))}
                            </Suspense>
                          </div>
                        </li>
                        <li>
                          <Link to='/portfolio' className='nav-link'>
                            Portfolio
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog' className='nav-link'>
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to='/faq' className='nav-link'>
                            Help
                          </Link>
                        </li>
                        <li>
                          <Link to='/contact' className='nav-link'>
                            Contact
                          </Link>
                        </li>
                        <li>
                          <button
                            type='button'
                            className='nav-link'
                            onClick={handleShow}
                          >
                            Sign in
                          </button>
                        </li>
                        <li>
                          <Link to='' className='btn'>
                            Place Order
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal centered={true} show={show} onHide={handleClose}>
        <section className='sign_in'>
          <div className='sign_in_part'>
            <div className='header_part'>
              <h3>Sign in</h3>
            </div>
            <form>
              <div className='form-group pb24'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group pb32'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control' id='password' />
              </div>
              <button type='submit' className='btn'>
                Sign in
              </button>
              <div className='custom-control checkb custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customCheck3'
                />
                <label className='custom-control-label' htmlFor='customCheck3'>
                  <h6>Keep me signed in</h6>
                </label>
              </div>
              <div className='forget'>
                <a href='#' className=''>
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </section>
      </Modal>
    </section>
  );
};

export default LargeNavbar;
