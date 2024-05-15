import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Divider,
  Drawer,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import styled from '@emotion/styled'
import MenuIcon from '@mui/icons-material/Menu'
import './mobile.css'

function App() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <LinkStyled to="/">
            <ListItemButton>
              <Typography variant="button">Dashboard</Typography>
            </ListItemButton>
          </LinkStyled>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <LinkStyled to="/orderbooks">
            <ListItemButton>
              <Typography variant="button">Orderbooks</Typography>
            </ListItemButton>
          </LinkStyled>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <LinkStyled to="/wallet-addresses">
            <ListItemButton>
              <Typography variant="button">Wallet Addresses</Typography>
            </ListItemButton>
          </LinkStyled>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <LinkStyled to="/funding-fees">
            <ListItemButton>
              <Typography variant="button">Funding fees</Typography>
            </ListItemButton>
          </LinkStyled>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <LinkStyled to="/positions">
            <ListItemButton>
              <Typography variant="button">Positions</Typography>
            </ListItemButton>
          </LinkStyled>
        </ListItem>
      </List>
    </Box>
  )
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ background: 'rgba(25, 118, 210, 0.08)' }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div class="container-center-horizontal">
        <div class="homepage-default screen " data-id="61:2481">
          <div class="frame-48097255-RuSDRG" data-id="61:2482">
            <div
              class="hero-96HNP7"
              data-id="61:2483-7baaec56-05c9-444d-b43e-3d4592eeb939"
            >
              <div class="frame-48097258-ohwxDy" data-id="61:2500">
                <div class="frame-48097257-amhnJw" data-id="61:2501">
                  <div class="frame-48097256-LxzXMM" data-id="61:2502">
                    <h1
                      class="smart-thinking-innovative-solution-FsiJQY desktop---tablettitlebold"
                      data-id="61:2503"
                    >
                      Smart-thinking &amp; Innovative Solution
                    </h1>
                    <p
                      class="experience-a-rise-in-FsiJQY mobilemainregular"
                      data-id="61:2504"
                    >
                      Experience a rise in your pursuits with our expert
                      consulting. We excel in tailoring success strategies{' '}
                      <br /> to your unique goals, covering diverse fields for
                      maximum impact, professionally and delightfully.{' '}
                    </p>
                  </div>
                  <div class="frame-2522-LxzXMM" data-id="61:2505">
                    <Button color="error" size="large" variant="contained">
                      Discover More
                    </Button>
                    <Button color="warning" size="large" variant="outlined">
                      Discover More
                    </Button>
                  </div>
                </div>
                <div class="frame-2475-amhnJw" data-id="61:2508">
                  <div class="text-xTMtWL" data-id="61:2509">
                    <img
                      class="icon-solidcheck"
                      data-id="61:2510"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/icon-solid-check.svg"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/icon-solid-check.svg"
                      alt="Icon/Solid/check"
                    />
                    <p
                      class="get-15-days-free-trial-ZHpxY6 mobilemainregular"
                      data-id="61:2512"
                    >
                      Get 15 days free trial
                    </p>
                  </div>
                  <div class="text-KxSOBn" data-id="61:2513">
                    <img
                      class="icon-solidcheck"
                      data-id="61:2514"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/icon-solid-check.svg"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/icon-solid-check.svg"
                      alt="Icon/Solid/check"
                    />
                    <p
                      class="get-15-days-free-trial-ZHpxY6 mobilemainregular"
                      data-id="61:2516"
                    >
                      No credit card is required
                    </p>
                  </div>
                  <div class="text-KxSOBn" data-id="61:2513">
                    <img
                      class="icon-solidcheck"
                      data-id="61:2514"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/icon-solid-check.svg"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/icon-solid-check.svg"
                      alt="Icon/Solid/check"
                    />
                    <p
                      class="get-15-days-free-trial-ZHpxY6 mobilemainregular"
                      data-id="61:2516"
                    >
                      Cancel anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-96HNP7 about" data-id="61:2528">
              <div class="frame-48097263-g66noy" data-id="61:2529">
                <div class="group-2567-TSPczo" data-id="61:2530">
                  <img
                    class="rectangle-1542-HEobDA"
                    data-id="61:2531"
                    src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/rectangle-1542.png"
                    anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/rectangle-1542.png"
                    alt="Rectangle 1542"
                  />
                  <div class="group-2566-HEobDA" data-id="61:2575">
                    <div class="rectangle-1543-aVgdNI" data-id="61:2576"></div>
                    <img
                      class="format-quote-aVgdNI"
                      data-id="61:2577"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/format-quote.svg"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/format-quote.svg"
                      alt="format-quote"
                    />
                    <p
                      class="emerging-technologie-aVgdNI mobilesmallregular"
                      data-id="61:2578"
                    >
                      Emerging Technologies like Blockchain Development.
                      Combining vast experience
                    </p>
                    <div
                      class="forman-cobid-founder-aVgdNI mobilesmallbold"
                      data-id="61:2579"
                    >
                      Forman Cobid, Founder
                    </div>
                    <img
                      class="ellipse-479-aVgdNI"
                      data-id="61:2580"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/ellipse-479@2x.png"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/ellipse-479@2x.png"
                      alt="Ellipse 479"
                    />
                  </div>
                </div>
              </div>
              <div class="frame-48097261-g66noy" data-id="61:2581">
                <div class="frame-48097260-VnMp6F" data-id="61:2582">
                  <div class="frame-48097259-vqCVBr" data-id="61:2583">
                    <div
                      class="about-us-3VrMQ1 mobilemainuppercase"
                      data-id="61:2584"
                    >
                      {' '}
                      ABOUT US
                    </div>
                    <p
                      class="we-are-business-cons-3VrMQ1 mobiletitlebold"
                      data-id="61:2585"
                    >
                      We Are Business Consulting &amp; Credit Repair Experts
                    </p>
                  </div>
                  <p
                    class="newwave-solutions-is-vqCVBr mobilemainregular"
                    data-id="61:2586"
                  >
                    Newwave Solutions is a top-notch IT outsourcing company with
                    over 11+ <br />
                    years of experience and 300+ dedicated employees. Since
                    2011, we've <br />
                    provided IT services from Mobile App Development, Software
                    Development, <br />
                    QA &amp; Testing, Software Maintenance, Game Development,
                    UI/UX Design, to <br />
                    Emerging Technologies like Blockchain Development. Combining
                    vast <br />
                    experience with a sense of responsibility and passion for
                    technology. We <br />
                    endeavor to not only deliver software development, but also
                    the best <br />
                    technological solutions to our clients and partners!{' '}
                  </p>
                </div>
                <Button color="error" size="large" variant="contained">
                  Explore our story now
                </Button>
              </div>
            </div>
            {/* <div class="matter-number-96HNP7" data-id="61:2591">
            <div class="section-heading-0VVoN6" data-id="61:2592">
              <div class="section-title-g5suD8 mobiletitlebold" data-id="61:2593">Some count that matters</div>
              <p class="description-g5suD8 mobilemainregular" data-id="61:2594">Our achievement in the journey depicted in numbers</p>
            </div>
            <div class="counts-0VVoN6" data-id="61:2595">
              <article class="count-1-wASyTd" data-id="61:2596">
                <img class="polygon-bg" data-id="I61:2596;18:622" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/polygon-bg.svg" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/polygon-bg.svg" alt="Polygon BG"/>
                <div class="details-g9i3wM details" data-id="I61:2596;23:868">
                  <div class="number mobiletitlebold" data-id="I61:2596;23:869">40+</div>
                  <div class="label-euQx6S label mobilemainregular" data-id="I61:2596;23:870">Happy <br/>Clients </div>
                </div>
              </article>
              <article class="count-2-wASyTd" data-id="61:2597">
                <img class="polygon-bg" data-id="I61:2597;18:622" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/polygon-bg-1.svg" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/polygon-bg-1.svg" alt="Polygon BG"/>
                <div class="details-ylUlyI details" data-id="I61:2597;23:868">
                  <div class="number mobiletitlebold" data-id="I61:2597;23:869">540+</div>
                  <div class="label-TVdTOh label mobilemainregular" data-id="I61:2597;23:870">Projects <br/>Completed </div>
                </div>
              </article>
              <article class="count-3-wASyTd" data-id="61:2598">
                <img class="polygon-bg" data-id="I61:2598;18:622" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/polygon-bg-2.svg" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/polygon-bg-2.svg" alt="Polygon BG"/>
                <div class="details-DZd2d5 details" data-id="I61:2598;23:868">
                  <div class="number mobiletitlebold" data-id="I61:2598;23:869">300</div>
                  <div class="label-U6KTIb label mobilemainregular" data-id="I61:2598;23:870">Dedicated <br/>Members </div>
                </div>
              </article>
              <article class="count-4-wASyTd" data-id="61:2599">
                <img class="polygon-bg" data-id="I61:2599;18:622" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/polygon-bg-3.svg" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/polygon-bg-3.svg" alt="Polygon BG"/>
                <div class="details-ChvUs9 details" data-id="I61:2599;23:868">
                  <div class="number mobiletitlebold" data-id="I61:2599;23:869">25+</div>
                  <div class="label-DLDMhx label mobilemainregular" data-id="I61:2599;23:870">Awards <br/>Won </div>
                </div>
              </article>
            </div>
            <img class="frame-47-0VVoN6 frame-47" data-id="61:2600" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-47.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-47.png" alt="Frame 47"/>
          </div> */}
            <div class="services-96HNP7" data-id="64:725">
              <img
                class="ellipse-477-nGS6Fb"
                data-id="64:726"
                src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/ellipse-477.svg"
                anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/ellipse-477.svg"
                alt="Ellipse 477"
              />
              <div class="title" data-id="64:727">
                <div class="frame-48097267" data-id="64:728">
                  <div
                    class="our-service-k6Y3t3 mobilemainuppercase"
                    data-id="64:729"
                  >
                    OUR SERVICE
                  </div>
                  <p
                    class="performance-is-the-k-k6Y3t3 mobiletitlebold"
                    data-id="64:730"
                  >
                    Performance Is The Key To Most People Achieving A Better
                    Future
                  </p>
                </div>
                <p
                  class="with-our-vision-of-p-SPlwXf mobilemainregular"
                  data-id="64:731"
                >
                  With our vision of providing integrated technology systems
                  solutions to optimize the processing of business over the
                  world with reasonable cost and high efficiency, we offer a
                  variety of services below.
                </p>
              </div>
              <div class="content-nGS6Fb" data-id="64:732">
                <div class="frame-2537-fPRj5L" data-id="64:733">
                  <Accordion
                    width="100%"
                    sx={{ background: 'transparent', width: '100%' }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                      aria-controls="panel1-content"
                      sx={{
                        minHeight: '56px !important',
                        height: 30,
                      }}
                    >
                      <div
                        class="blockchain-development-zx92H4 valign-text-middle blockchain-development mobilesubtitlebold"
                        data-id="I64:737;18:676"
                      >
                        Blockchain Development
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>Todo</AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ background: 'transparent', width: '100%' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                      aria-controls="panel1-content"
                      sx={{
                        minHeight: '56px !important',
                        height: 30,
                      }}
                    >
                      <div
                        class="blockchain-development-zx92H4 valign-text-middle blockchain-development mobilesubtitlebold"
                        data-id="I64:737;18:676"
                      >
                        Mobile App Development
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>Todo</AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ background: 'transparent', width: '100%' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                      aria-controls="panel1-content"
                      sx={{
                        minHeight: '56px !important',
                        height: 30,
                      }}
                    >
                      <div
                        class="blockchain-development-zx92H4 valign-text-middle blockchain-development mobilesubtitlebold"
                        data-id="I64:737;18:676"
                      >
                        Web Development
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>Todo</AccordionDetails>
                  </Accordion>
                  <Accordion
                    sx={{ background: 'transparent', width: '100%' }}
                    defaultExpanded
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                      aria-controls="panel1-content"
                      sx={{
                        minHeight: '56px !important',
                        height: 30,
                      }}
                    >
                      <div
                        class="blockchain-development-zx92H4 valign-text-middle blockchain-development mobilesubtitlebold"
                        data-id="I64:737;18:676"
                      >
                        Software Development
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div
                        class="frame-48097274-mZoddh"
                        data-id="64:744-2a9e1c05-8dc8-4559-80d0-321abd035896"
                      >
                        <img
                          class="card-3-r43hYE"
                          data-id="64:746"
                          src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/card-3@2x.png"
                          anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/card-3@2x.png"
                          alt="Card 3"
                        />
                      </div>
                      <div class="frame-48097304-mZoddh" data-id="65:1044">
                        <p
                          class="support-your-busines-xQP0LO mobilemainregular"
                          data-id="64:814"
                        >
                          Support your business infrastructure with software
                          development projects that improve crucial facets of
                          your business. <br />
                          Get access to our industry-specific knowledge to plan,
                          construct, and scale your new custom software
                          development{' '}
                        </p>
                        <div
                          class="frame-48097273-xQP0LO frame-48097273"
                          data-id="64:815"
                        >
                          <article
                            class="frame-48097275-GRX1UD"
                            data-id="64:816"
                          >
                            <div
                              class="enterprise-application valign-text-middle mobilesmallregular"
                              data-id="I64:816;21:730"
                            >
                              Enterprise Application
                            </div>
                          </article>
                          <article
                            class="frame-48097275-GRX1UD"
                            data-id="64:817"
                          >
                            <div
                              class="enterprise-application valign-text-middle mobilesmallregular"
                              data-id="I64:817;21:730"
                            >
                              Software Product
                            </div>
                          </article>
                          <article
                            class="frame-48097275-GRX1UD"
                            data-id="64:818"
                          >
                            <div
                              class="enterprise-application valign-text-middle mobilesmallregular"
                              data-id="I64:818;21:730"
                            >
                              Custom Software
                            </div>
                          </article>
                          <article
                            class="frame-48097275-GRX1UD"
                            data-id="64:819"
                          >
                            <div
                              class="enterprise-application valign-text-middle mobilesmallregular"
                              data-id="I64:819;21:730"
                            >
                              MVP Development
                            </div>
                          </article>
                          <article
                            class="frame-48097275-GRX1UD"
                            data-id="64:820"
                          >
                            <div
                              class="enterprise-application valign-text-middle mobilesmallregular"
                              data-id="I64:820;21:730"
                            >
                              Software Maintenance
                            </div>
                          </article>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion sx={{ background: 'transparent', width: '100%' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                      aria-controls="panel1-content"
                      sx={{
                        minHeight: '56px !important',
                        height: 30,
                      }}
                    >
                      <div
                        class="blockchain-development-zx92H4 valign-text-middle blockchain-development mobilesubtitlebold"
                        data-id="I64:737;18:676"
                      >
                        UI/UX Design
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>Todo</AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
            <div class="strong-point-96HNP7 strong-point" data-id="65:1073">
              <div class="frame-48097311-znQKqY" data-id="65:1074">
                <div class="frame-48097299-XMi3LM" data-id="65:1075">
                  <p
                    class="why-will-you-choose-our-application-8S9Vgm desktop---tablettitlebold"
                    data-id="65:1076"
                  >
                    Why Will You Choose Our Application
                  </p>
                  <p
                    class="class-aptent-taciti-8S9Vgm class-aptent-taciti desktop---tabletmainregular"
                    data-id="65:1077"
                  >
                    Class aptent taciti sociosqu ad litora torquen conubia
                    nostramase inceptos himenaeo. Phasellus metus nisl euismod
                    eget lorem.
                  </p>
                </div>
              </div>
              <div class="frame-48097310-znQKqY" data-id="65:1086">
                <div class="frame-48097306-hbbo5u" data-id="65:1087">
                  <div class="frame-2539-KF68T3" data-id="65:1088">
                    <img
                      class="vector-a5FY3Q vector"
                      data-id="65:1089"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/vector.svg"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/vector.svg"
                      alt="Vector"
                    />
                    <img
                      class="image-19-a5FY3Q"
                      data-id="65:1090"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/image-19.png"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/image-19.png"
                      alt="image 19"
                    />
                    <div class="frame-48097305" data-id="65:1091">
                      <div
                        class="creative-ideas-cSjaJx mobilesubtitlebold"
                        data-id="65:1092"
                      >
                        Creative Ideas
                      </div>
                      <p
                        class="class-aptent-taciti-cSjaJx class-aptent-taciti mobilemainregular"
                        data-id="65:1093"
                      >
                        Class aptent taciti sociq u litora torquen conub.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="frame-48097306-hbbo5u" data-id="65:1094">
                  <div class="frame-2539-KF68T3" data-id="65:1095">
                    <img
                      class="vector-a5FY3Q vector"
                      data-id="65:1096"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/vector.svg"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/vector.svg"
                      alt="Vector"
                    />
                    <img
                      class="image-19-a5FY3Q"
                      data-id="65:1097"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/image-23.png"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/image-23.png"
                      alt="image 23"
                    />
                    <div class="frame-48097305" data-id="65:1098">
                      <div
                        class="creative-ideas-cSjaJx mobilesubtitlebold"
                        data-id="65:1099"
                      >
                        Awesome Design
                      </div>
                      <p
                        class="class-aptent-taciti-cSjaJx class-aptent-taciti mobilemainregularr"
                        data-id="65:1100"
                      >
                        Integer a elit pellentesqu e semper sem ultricies.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="frame-48097306-hbbo5u" data-id="65:1101">
                  <div class="frame-2539-KF68T3" data-id="65:1102">
                    <img
                      class="vector-a5FY3Q vector"
                      data-id="65:1103"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/vector.svg"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/vector.svg"
                      alt="Vector"
                    />
                    <img
                      class="image-19-a5FY3Q"
                      data-id="65:1104"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/image-24.png"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/image-24.png"
                      alt="image 24"
                    />
                    <div class="frame-48097305" data-id="65:1105">
                      <div
                        class="creative-ideas-cSjaJx mobilesubtitlebold"
                        data-id="65:1106"
                      >
                        Best Features
                      </div>
                      <p
                        class="class-aptent-taciti-cSjaJx class-aptent-taciti mobilemainregularr"
                        data-id="65:1107"
                      >
                        Fusce risus lorem pulvin ar eu posuere vitae.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="frame-48097306-hbbo5u" data-id="65:1108">
                  <div class="frame-2539-KF68T3" data-id="65:1109">
                    <img
                      class="vector-a5FY3Q vector"
                      data-id="65:1110"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/vector.svg"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/vector.svg"
                      alt="Vector"
                    />
                    <img
                      class="image-19-a5FY3Q"
                      data-id="65:1111"
                      src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/image-26.png"
                      anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/66433a8c53907e7b0470fd2e/img/image-26.png"
                      alt="image 26"
                    />
                    <div class="frame-48097305" data-id="65:1112">
                      <div
                        class="creative-ideas-cSjaJx mobilesubtitlebold"
                        data-id="65:1113"
                      >
                        Easy Solutions
                      </div>
                      <p
                        class="class-aptent-taciti-cSjaJx class-aptent-taciti mobilemainregularr"
                        data-id="65:1114"
                      >
                        Aenean eget nulla eu dui malesuad convallis vel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="strong-point-EQdKaS strong-point" data-id="65:1440">
            <img class="frame-49-gwS5Ed" data-id="65:1441" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-49.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-49.png" alt="Frame 49"/>
            <div class="title" data-id="65:1466">
              <div class="frame-48097267" data-id="65:1467">
                <div class="clients-testimonials-4TdjqV mobilemainuppercase" data-id="65:1468">CLIENT’S TESTIMONIALS</div>
                <p class="see-what-clients-are-saying-4TdjqV mobiletitlebold" data-id="65:1469">See What Clients Are Saying</p>
              </div>
              <p class="explore-the-authenti-T3OwLI mobilemainregular" data-id="65:1470">Explore the authentic sentiments and experiences of our clients as they share their thoughts and satisfaction.</p>
            </div>
            <div class="frame-48097313-gwS5Ed" data-id="65:1638">
              <div class="frame-48097312-SLWwSe" data-id="65:1471">
                <article class="client-card" data-id="65:1336">
                  <p class="exceptional-service mobilemainregular" data-id="65:1299">Exceptional service! The consulting firm navigated us through challenges with precision, delivering impactful strategies that led to tangible and sustainable results.</p>
                  <div class="frame-81" data-id="65:1300">
                    <img class="image-9" data-id="65:1301" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-9@2x.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-9@2x.png" alt="image 9"/>
                    <div class="frame-26-IlorbU frame-26" data-id="65:1302">
                      <div class="frame-195" data-id="65:1303">
                        <div class="karmel-otto mobilemainbold" data-id="65:1304">Karmel Otto</div>
                        <div class="accountant-finance-manager mobilesmallregular" data-id="65:1305">Accountant &amp; Finance Manager</div>
                      </div>
                      <img class="frame-194" data-id="65:1306" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-194.svg" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-194.svg" alt="Frame 194"/>
                    </div>
                  </div>
                </article>
                <article class="client-card-TJdabE client-card" data-id="65:1472">
                  <p class="exceptional-service mobilemainregular" data-id="I65:1472;65:1299">Exceptional service! The consulting firm navigated us through challenges with precision, delivering impactful strategies that led to tangible and sustainable results. And sustainable results.</p>
                  <div class="frame-81" data-id="I65:1472;65:1300">
                    <img class="image-9" data-id="I65:1472;65:1301" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-9@2x.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-9@2x.png" alt="image 9"/>
                    <div class="frame-26-dIBlxU frame-26" data-id="I65:1472;65:1302">
                      <div class="frame-195" data-id="I65:1472;65:1303">
                        <div class="karmel-otto mobilemainbold" data-id="I65:1472;65:1304">Karmel Otto</div>
                        <div class="accountant-finance-manager mobilesmallregular" data-id="I65:1472;65:1305">Accountant &amp; Finance Manager</div>
                      </div>
                      <img class="frame-194" data-id="I65:1472;65:1306" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-194-1@2x.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-194-1@2x.png" alt="Frame 194"/>
                    </div>
                  </div>
                </article>
                <article class="client-card-NACTLj client-card" data-id="65:1473">
                  <p class="exceptional-service mobilemainregular" data-id="I65:1473;65:1299">Exceptional service! The consulting firm navigated us through challenges with precision, delivering impactful strategies that led to tangible and sustainable results. And sustainable results.</p>
                  <div class="frame-81" data-id="I65:1473;65:1300">
                    <img class="image-9" data-id="I65:1473;65:1301" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-9@2x.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-9@2x.png" alt="image 9"/>
                    <div class="frame-26-EPSD48 frame-26" data-id="I65:1473;65:1302">
                      <div class="frame-195" data-id="I65:1473;65:1303">
                        <div class="karmel-otto mobilemainbold" data-id="I65:1473;65:1304">Karmel Otto</div>
                        <div class="accountant-finance-manager mobilesmallregular" data-id="I65:1473;65:1305">Accountant &amp; Finance Manager</div>
                      </div>
                      <img class="frame-194" data-id="I65:1473;65:1306" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-194-1@2x.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-194-1@2x.png" alt="Frame 194"/>
                    </div>
                  </div>
                </article>
              </div>
              <div class="button-SLWwSe" data-id="65:1510">
                <article class="desktop-icon-button" data-id="65:1511" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/desktop--icon-button.svg" alt="Desktop  Icon Button">
                  <article class="desktop-icon-button" data-id="65:1512" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/desktop--icon-button.svg" alt="Desktop  Icon Button"></article>
                </article>
              </div>
            </div>
          </div> */}
            <div class="cta-96HNP7" data-id="65:1855">
              <img
                class="image-11-IG5j0Q"
                data-id="65:2031"
                src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-11@2x.png"
                anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-11@2x.png"
                alt="image 11"
              />
              <img
                class="frame-47-IG5j0Q frame-47"
                data-id="65:2032"
                src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-47-2.png"
                anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/frame-47-2.png"
                alt="Frame 47"
              />
              <div class="frame-208-IG5j0Q" data-id="65:2064">
                <div class="frame-42-mj99GY" data-id="65:2065">
                  <p
                    class="lets-collaborate-for-mutual-success-N2v3tx mobiletitlebold"
                    data-id="65:2066"
                  >
                    Let's Collaborate for Mutual Success
                  </p>
                  <p
                    class="your-success-story-b-N2v3tx mobilemainregular"
                    data-id="65:2067"
                  >
                    Your success story begins with a click, explore our
                    consulting solutions for transformative results.
                  </p>
                </div>
                <div class="desktop-button-mj99GY" data-id="65:2068">
                  <div
                    class="x160-pixel-width-RiiO5h x160-pixel-width desktop---tabletmainbutton"
                    data-id="I65:2068;3:209"
                  >
                    Collaborate with Us
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="article-96HNP7" data-id="65:2226">
            <div class="article-z6y3Qn" data-id="65:2227">
              <div class="title" data-id="65:2228">
                <div class="frame-48097267" data-id="65:2229">
                  <div class="our-news-VNSixh mobilemainuppercase" data-id="65:2230">OUR NEWS</div>
                  <div class="read-our-articles-collection-VNSixh mobiletitlebold" data-id="65:2231">Read Our Articles Collection</div>
                </div>
                <p class="explore-our-diverse-7zgOTH mobilemainregular" data-id="65:2232">Explore our diverse articles collection for insightful perspectives and expert knowledge on a topic that you can consultated with us.</p>
              </div>
              <div class="card-slider-cU7wrP" data-id="65:2233">
                <div class="card" data-id="65:2234">
                  <div class="frame-211" data-id="65:2235">
                    <img class="image-12" data-id="65:2236" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-12@2x.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-12@2x.png" alt="image 12"/>
                    <div class="frame-43-Gf8xsH frame-43" data-id="65:2237">
                      <div class="blockchain-jJwiZx mobilemainregular" data-id="65:2238">Blockchain</div>
                    </div>
                  </div>
                  <div class="frame-48097296" data-id="65:2239">
                    <div class="frame-26-7htNnW frame-26" data-id="65:2240">
                      <p class="revolutionizing-fina-ZCZU1F mobilesubtitlebold" data-id="65:2241">Revolutionizing Financial Transactions with Blockchain</p>
                      <p class="discover-how-blockch-ZCZU1F mobilemainregular" data-id="65:2242">Discover How Blockchain Technology is Transforming the Landscape of Fintech and Redefining Financial Transactions as We Know Them.</p>
                    </div>
                    <div class="frame-214" data-id="65:2243">
                      <div class="apr-14th-2024-truju3" data-id="65:2244">Apr 14th, 2024</div>
                      <div class="read-more mobilemainbutton" data-id="65:2245">Read More</div>
                    </div>
                  </div>
                </div>
                <div class="card" data-id="65:2246">
                  <div class="frame-211" data-id="65:2247">
                    <img class="image-12" data-id="65:2248" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-12-1@2x.png" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/image-12-1@2x.png" alt="image 12"/>
                    <div class="frame-43-IuGTgP frame-43" data-id="65:2249">
                      <div class="uxui-5Eijvv mobilemainregular" data-id="65:2250">UX/UI</div>
                    </div>
                  </div>
                  <div class="frame-48097296" data-id="65:2251">
                    <div class="frame-26-mdlL6X frame-26" data-id="65:2252">
                      <div class="atomic-in-uiux-design-1tJUJo mobilesubtitlebold" data-id="65:2253">Atomic in UI/UX Design</div>
                      <p class="explore-the-crucial-1tJUJo mobilemainregular" data-id="65:2254">Explore the Crucial Role of User Interface and Experience Design in Enhancing Digital Solutions and Creating Seamless User Experiences.</p>
                    </div>
                    <div class="frame-214" data-id="65:2255">
                      <div class="apr-2rd-2024-QZ81kn" data-id="65:2256">Apr 2rd, 2024</div>
                      <div class="read-more mobilemainbutton" data-id="65:2257">Read More</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mobile-button-cU7wrP mobile-button" data-id="65:2258">
                <div class="x160-pixel-width-uN81YP x160-pixel-width mobilemainbutton" data-id="I65:2258;61:843">View all</div>
                <img class="arrow_right_alt" data-id="I65:2258;61:844" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/arrow-right-alt-3.svg" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/arrow-right-alt-3.svg" alt="arrow_right_alt"/>
              </div>
            </div>
          </div> */}
            <div class="footer-96HNP7 footer" data-id="65:2429">
              <div class="footer-o0JZMP footer" data-id="65:2430">
                <div class="main-footer-k1XqB8" data-id="65:2431">
                  <div class="frame-48097294-ukFFDZ" data-id="65:2432">
                    <div class="frame-48097289-QOjxqE" data-id="65:2433">
                      <div class="frame-48097288-Q6pTmI" data-id="65:2434">
                        <div class="logo-lNjWbN logo" data-id="65:2435">
                          <img
                            class="icon-container"
                            data-id="65:2436"
                            src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/icon-container.svg"
                            anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/icon-container.svg"
                            alt="Icon Container"
                          />
                          <div class="text-GNUM2B" data-id="65:2438">
                            <div class="logo-iScgIT logo" data-id="65:2439">
                              Logo
                            </div>
                          </div>
                        </div>
                        <p
                          class="get-in-touch-on-us-f-lNjWbN mobiletitlebold"
                          data-id="65:2441"
                        >
                          Get in Touch on Us for Your Path to Success
                        </p>
                        <div
                          class="frame-48097287-lNjWbN frame-48097287"
                          data-id="65:2442"
                        >
                          <div class="frame-48097285-Xv8aex" data-id="65:2443">
                            <img
                              class="phone_enabled-J043Md"
                              data-id="65:2444"
                              src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/phone-enabled.svg"
                              anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/phone-enabled.svg"
                              alt="phone_enabled"
                            />
                            <div
                              class="x888-1234-5678-J043Md montserrat-medium-white-14px"
                              data-id="65:2445"
                            >
                              (888) 1234-5678
                            </div>
                          </div>
                          <div
                            class="frame-48097287-Xv8aex frame-48097287"
                            data-id="65:2446"
                          >
                            <img
                              class="mail-jtlQJL"
                              data-id="65:2447"
                              src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/mail.svg"
                              anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/mail.svg"
                              alt="mail"
                            />
                            <div
                              class="infoexamplecom-jtlQJL montserrat-medium-white-14px"
                              data-id="65:2448"
                            >
                              info@example.com
                            </div>
                          </div>
                          <div class="frame-48097286-Xv8aex" data-id="65:2449">
                            <img
                              class="location_on-SuW4VV"
                              data-id="65:2450"
                              src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/location-on.svg"
                              anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/location-on.svg"
                              alt="location_on"
                            />
                            <p
                              class="x772-abc-street-usa-000000-SuW4VV montserrat-medium-white-14px"
                              data-id="65:2451"
                            >
                              772 ABC street, USA 000000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="frame-48097293-QOjxqE frame-48097293"
                      data-id="65:2452"
                    >
                      <div class="frame-48097291-goAqjM" data-id="65:2453">
                        <div
                          class="useful-links-F1Xroz valign-text-bottom mobilemainbold"
                          data-id="65:2454"
                        >
                          Useful Links
                        </div>
                        <div class="frame-48097290" data-id="65:2455">
                          <div
                            class="features valign-text-bottom mobilemainregular"
                            data-id="65:2456"
                          >
                            Features
                          </div>
                          <div
                            class="about-VEOKzy valign-text-bottom about mobilemainregular"
                            data-id="65:2457"
                          >
                            About
                          </div>
                          <div
                            class="service valign-text-bottom mobilemainregular"
                            data-id="65:2458"
                          >
                            Service
                          </div>
                          <div
                            class="team valign-text-bottom mobilemainregular"
                            data-id="65:2459"
                          >
                            Team
                          </div>
                        </div>
                      </div>
                      <div class="frame-48097292-goAqjM" data-id="65:2460">
                        <div
                          class="help-support-May1xb valign-text-bottom mobilemainbold"
                          data-id="65:2461"
                        >
                          Help &amp; Support
                        </div>
                        <div class="frame-48097290" data-id="65:2462">
                          <div
                            class="features valign-text-bottom mobilemainregular"
                            data-id="65:2463"
                          >
                            Features
                          </div>
                          <div
                            class="about-41xrgx valign-text-bottom about mobilemainregular"
                            data-id="65:2464"
                          >
                            About
                          </div>
                          <div
                            class="service valign-text-bottom mobilemainregular"
                            data-id="65:2465"
                          >
                            Service
                          </div>
                          <div
                            class="team valign-text-bottom mobilemainregular"
                            data-id="65:2466"
                          >
                            Team
                          </div>
                        </div>
                      </div>
                      <div
                        class="frame-48097293-goAqjM frame-48097293"
                        data-id="65:2467"
                      >
                        <div
                          class="resources-0Aq6IL valign-text-bottom mobilemainbold"
                          data-id="65:2468"
                        >
                          Resources
                        </div>
                        <div class="frame-48097290" data-id="65:2469">
                          <div
                            class="guides-and-8CMmfY valign-text-bottom mobilemainregular"
                            data-id="65:2470"
                          >
                            Guides and
                          </div>
                          <div
                            class="team valign-text-bottom mobilemainregular"
                            data-id="65:2471"
                          >
                            team
                          </div>
                          <div
                            class="tool-8CMmfY valign-text-bottom mobilemainregular"
                            data-id="65:2472"
                          >
                            Tool
                          </div>
                          <div
                            class="support-8CMmfY valign-text-bottom mobilemainregular"
                            data-id="65:2473"
                          >
                            Support
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sub-footer-k1XqB8" data-id="65:2474">
                  <div class="links-0X2qx5" data-id="65:2475">
                    <div class="frame-48097314-V0Cj1E" data-id="65:2476">
                      <div
                        class="terms-conditions-dXxVjP mobilesmallregular"
                        data-id="65:2477"
                      >
                        Terms &amp; Conditions
                      </div>
                      <div
                        class="x-dXxVjP x mobilesmallregular"
                        data-id="65:2478"
                      >
                        |
                      </div>
                      <div
                        class="privacy-policy-dXxVjP mobilesmallregular"
                        data-id="65:2479"
                      >
                        Privacy Policy
                      </div>
                    </div>
                    <div class="frame-48097315-V0Cj1E" data-id="65:2481">
                      <div
                        class="sitemap-uPReLW mobilesmallregular"
                        data-id="65:2482"
                      >
                        Sitemap
                      </div>
                      <div
                        class="x-uPReLW x mobilesmallregular"
                        data-id="65:2483"
                      >
                        |
                      </div>
                      <div
                        class="disclaimer-uPReLW mobilesmallregular"
                        data-id="65:2484"
                      >
                        Disclaimer
                      </div>
                    </div>
                  </div>
                  <p
                    class="x2024-company-brand-all-rights-reserved-0X2qx5 mobilesmallregular"
                    data-id="65:2485"
                  >
                    © 2024 Company brand . All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="frame-48097301-RuSDRG" data-id="61:4193">
          <div class="logo-oqOISB logo" data-id="61:4194">
            <img class="icon-container" data-id="61:4195" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/icon-container-1.svg" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/icon-container-1.svg" alt="Icon Container">
            <div class="text-qgqimR" data-id="61:4197">
              <div class="logo-v2cBzO logo" data-id="61:4198">Logo</div>
            </div>
          </div>
          <img class="menu-oqOISB" data-id="61:4200" src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/menu.svg" anima-src="https://cdn.animaapp.com/projects/5fe2e425c2be9e06dafb5d24/releases/6643828be672494db2fef718/img/menu.svg" alt="menu">
        </div> */}
        </div>
      </div>
    </Box>
  )
}

export default App

const LinkStyled = styled.a`
  textDecoration: 'auto',
  color: 'unset',
  width: '100%',
`
