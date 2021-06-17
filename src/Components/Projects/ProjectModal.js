import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Youtube from "./Youtube";
import Button from '@material-ui/core/Button';
import '../../styles.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '3px solid #dce7e8',
    width: '80vw',
    height: '80vh',
    boxShadow: theme.shadows[5],
    padding: '20px',

  },
  modalButton:{
    marginLeft: "15px",
    backgroundColor: '#F7F5F2',
  },
  details: {
    height: '500px',
    overflowY: 'scroll',
  }
}));

const ProjectModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" size="small" className={classes.modalButton} onClick={handleOpen}>See more</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className="modal-title">{props.project.title} Project</h2>
            <Grid container spacing={2}>
              <Grid item xs={6}>
              <div className="modal-video-container">
                <div className="modal-video">
                  <Youtube embedId={props.project.embedId} />
                </div>
              </div>     
              </Grid>
              <Grid item xs={6} className={classes.details}>
                <div className="modal-text">
                  <h3>Description</h3>    
                  <p className="modal-paragraphs">{props.project.description}</p>
                  <h3>Goals</h3>
                  <p className="modal-paragraphs">{props.project.goals}</p>
                  <h3>Challenges</h3>
                  <p className="modal-paragraphs">{props.project.challenges}</p>
                  <h3>Languages</h3>
                  <p className="modal-paragraphs">{props.project.languagesModal}</p>
                  <h3>Links</h3>
                  <ul>
                    <li>Source Code: {props.project.githubPath.includes("github.com") ? <a target="_blank" href={props.project.githubPath} rel="noreferrer">{props.project.githubPath}</a> : props.project.githubPath}</li>
                    <li>Deployment Link: {(props.project.url.includes(".com") || props.project.url.includes(".ca") || props.project.url.includes(".io")) ?
                         <a target="_blank" href={props.project.url} rel="noreferrer">{props.project.url}</a> : props.project.url}</li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default ProjectModal;