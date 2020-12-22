# trackers-consent
1. yarn install or npm install on project.
2. run this command `npm run dist`
3. Have to push project on git
4. You have to add pushed project git url to package.json. For instance:
  "tracker-consent": "git+https://github.com/Dream068/tracker-consent.git"
5. yarn install or npm install
6. You can use DialogActions component in any project:
    import DialogActions from 'tracker-consent'

    return(
      <DialogActions />
    )

    this component has below language and tracker props.
    props: {
      language: 'en',
      trackers: {
        personalization: PropTypes.bool,
        analytical: PropTypes.bool,
        marketing: PropTypes.bool,
        socialMedia: PropTypes.bool,
      }
    }

    Default Props value is 
    language: 'en',
    trackers: {
        personalization: false,
        analytical: false,
        marketing: false,
        socialMedia: false,
      }
    If some trackers' props are not set up, they don't show in the UI.

7. If you want generate one bundle.js file for using in html page then run below command.

    npm run build
    
   Then you can find bundle.js file in dist folder root.
   And can use bundle.js file in html file by adding on html body.

    <script src="bundle.js" type="text/javascript"></script>
