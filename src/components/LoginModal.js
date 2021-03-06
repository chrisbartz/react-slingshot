import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from "prop-types";

const LoginModal = (props) => {
  // debugger;
  return (
    <Modal show={props.showModal} onHide={props.cancelAction}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.bodyText}</h4>
        {props.bodyText ?
          <h4 className="bold">{props.boldText}</h4>
          :
          null
        }
        <input
        type="text"
        name="inputUsername"
        className="form-control"
        placeholder="Enter your username"
        value={props.pageProps.inputUsername}
        onChange={(event) => props.restCallActions.updatePageProps("inputUsername", event.target.value)}
        />
        <input
          type="text"
          name="inputPassword"
          className="form-control"
          placeholder="Enter your password"
          value={props.pageProps.inputPassword}
          onChange={(event) => props.restCallActions.updatePageProps("inputPassword", event.target.value)}
        />
        {props.pageProps.loginErrors != undefined && props.pageProps.loginErrors.length > 0 ?
          props.pageProps.loginErrors.map((error, index) => {
            return (
              <p className="error-text" key={index}>{error}</p>
            );
          })
          :
          null
        }
      </Modal.Body>
      <Modal.Footer>
        {props.pageProps.inputUsername != undefined && props.pageProps.inputUsername.length > 0 ?
          <button className="btn brand-blue-button" onClick={props.confirmAction}>{props.confirmText}</button>
        :
        <button disabled="disabled" className="btn brand-blue-button" onClick={props.confirmAction}>{props.confirmText}</button>
        }
        {props.showCancelButton ?
          <button className="btn brand-gray-button" onClick={props.cancelAction}>{props.cancelText}</button>
          :
          null
        }
      </Modal.Footer>
    </Modal>
  );
};

LoginModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  showCancelButton: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  bodyText: PropTypes.string,
  boldText: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string.isRequired,
  confirmAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
  userField: PropTypes.string,
  restCallActions: PropTypes.object.isRequired,
  passField: PropTypes.string,
  pageProps: PropTypes.object.isRequired
};

export default LoginModal;
