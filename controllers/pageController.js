exports.getCar = (req, res) => {
  
    res.status(200).render('car',{
        page_name:'car',
    })
  }; 
  exports.getIndex = (req, res) => {
    res.status(200).render('index',{
        page_name:'index  ',
    })
  }; 
exports.getHouse = (req, res) => {
    res.status(200).render('house',{
        page_name:'house',
    })
  };
  exports.getSignin = (req, res) => {
    res.status(200).render('sign-in',{
        page_name:'sign-in',
    })
  };
  exports.getSignup = (req, res) => {
    res.status(200).render('sign-up',{
        page_name:'sign-up',
    })
  };
  exports.getCaradvert = (req, res) => {
    res.status(200).render('caradvert',{
        page_name:'caradvert',
    })
  };
  exports.getHouseadvert= (req, res) => {
    res.status(200).render('houseadvert',{
        page_name:'houseadvert',
    })
  };
  exports.getSupport = (req, res) => {
    res.status(200).render('support',{
        page_name:'support',
    })
  };
  exports.getaddAdvert = (req, res) => {
    res.status(200).render('advert',{
        page_name:'advert',
    })
  };
  exports.getProfile = (req, res) => {
    
    res.status(200).render('profile',{
        page_name:'profile',
    })
  };

  exports.getOtomobil = (req, res) => {
    
    res.status(200).render('otomobil',{
        page_name:'otomobil',
    })
  };
  exports.getSuv = (req, res) => {
    
    res.status(200).render('suv',{
        page_name:'suv',
    })
  };
  exports.getMotor = (req, res) => {
    
    res.status(200).render('motor',{
        page_name:'motor',
    })
  };




