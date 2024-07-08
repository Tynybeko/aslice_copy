<template>
  <div id="faq-page" class="container-fluid">
      <div class="faq-page__header col-12">
        <h1 class="faq-page__header-title">FAQ</h1>
        <p class="faq-page__header-text">Learn more about the Aslice software. Get answers to questions regarding DJ and music producer registration, accounting, playlist sharing, and more.</p>
        <p class="faq-page__header-description">Need some help from The Aslice Team? <a href="/contact" target="_blank">Contact Us</a>.</p>
      </div>
    <div class="container">
      <div class="col-12">
        <div class="row general-info" id="general-info">
          <div class="row my-5 block-info">
            <h1 class="info-title general-faq" >General</h1>
            <span
              class="copy-faq-url"
              @click.stop="copyFaqUrl('general-info')"
            >
              <img alt="" src="@/assets/images/link-icon.svg" />
            </span>
          </div>
          <div class="accordion" role="tablist">
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-1"
                :class="searchHash === 'general-info-1' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-1-btn"
                  v-b-toggle="'general-info-1'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-1')"
                >
                  <div class="faq-title">What is Aslice? & How does Aslice work?</div>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-1')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                  <span class="button-plus-img"></span>
                </b-button>
              </b-card-header>
              <b-collapse
                id="general-info-1"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice is a service that allows performing DJs to share
                      their fees with the artists who create the music they play
                      in their sets.
                      <br><br>
                      <div
                          class="row"
                          style="margin: 0;"
                      >
                        <div
                            class="col-lg-4 col-md-4 col-6 child-section child-section-one"
                        >
                          <p class="number-count">1</p>
                          <img
                              alt=""
                              class="child-image"
                              src="@/assets/images/faq/headphone.svg"
                          />
                          <p class="child-article">DJ plays gig</p>
                        </div>
                        <div
                            class="col-lg-4 col-md-4 col-6 child-section child-section-two"
                        >
                          <p class="number-count">2</p>
                          <img
                              alt=""
                              class="child-image"
                              src="@/assets/images/faq/usb.svg"
                          />
                          <p class="child-article">
                            DJ inserts external media (USB) into computer and
                            opens Aslice software
                          </p>
                        </div>
                        <div
                            class="col-lg-4 col-md-4 col-6 child-section child-section-three"
                        >
                          <p class="number-count">3</p>
                          <img
                              alt=""
                              class="child-image"
                              src="@/assets/images/faq/playlist.svg"
                          />
                          <p class="child-article">
                            DJ imports playlist and enters gig details (playlist
                            can be edited and vinyl records can be added)
                          </p>
                        </div>
                        <div
                            class="col-lg-4 col-md-4 col-6 child-section child-section-four"
                        >
                          <p class="number-count">4</p>
                          <img
                              alt=""
                              class="child-image"
                              src="@/assets/images/faq/percent.svg"
                          />
                          <p class="child-article">
                            DJ submits playlist and shares a small percentage of
                            gig fee (suggested 5%)
                          </p>
                        </div>
                        <div
                            class="col-lg-4 col-md-4 col-6 child-section child-section-five"
                        >
                          <p class="number-count">5</p>
                          <img
                              alt=""
                              class="child-image"
                              src="@/assets/images/faq/piano.svg"
                          />
                          <p class="child-article">
                            Aslice distributes the money shared to producers
                            played in set.
                          </p>
                        </div>
                        <div
                            class="col-lg-4 col-md-4 col-6 child-section child-section-six"
                        >
                          <p class="number-count">6</p>
                          <img
                              alt=""
                              class="child-image"
                              src="@/assets/images/faq/coin.svg"
                          />
                          <p class="child-article">
                            Money allocated for songs not identified gets
                            donated to charity and voted on by Aslice users.
                          </p>
                        </div>
                      </div>
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-3"
                :class="searchHash === 'general-info-3' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-3-btn"
                  v-b-toggle="'general-info-3'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-3')"
                >
                  <div class="faq-title">
                    What DJ-based performance software and hardware products
                    does Aslice work with?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-3')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      <strong>Software:</strong>
                      <br />
                      Aslice is currently compatible with export playlist files
                      from Rekordbox (.txt), Serato (.m3u) and Traktor (.m3u).
                      <br /><br />
                      <strong>Hardware:</strong>
                      <br />
                      Aslice gets its information from your DJ history files
                      regardless of which controller, DJ player,
                      all-in-one DJ System, digital vinyl system, etc. that you
                      use. All variations are compatible if utilized via the
                      software mentioned above.
                      <br /><br />
                      *We are working hard to expand our compatibility with
                      Denon DJ, Algoriddm, VirtualDJ and other hardware and
                      software configurations.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-4"
                :class="searchHash === 'general-info-4' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-4-btn"
                  v-b-toggle="'general-info-4'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-4')"
                >
                  <div class="faq-title">
                    What if I simply put audio files on a USB storage device?
                    Can I still use Aslice?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-4')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice works with all Pioneer hardware that can play music
                      from USB storage devices (flash memory, HDD, etc.), SD
                      Cards or a connected computer. Pioneer hardware
                      automatically saves DJ history files onto your device,
                      which can then be read by the Aslice desktop app whenever
                      that device is plugged into your computer.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-6"
                :class="searchHash === 'general-info-6' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-6-btn"
                  v-b-toggle="'general-info-6'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-6')"
                >
                  <div class="faq-title">
                    Can I still upload a playlist and share money for virtual
                    gigs, or gigs where I wasn’t paid?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-6')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span
                    >Yes! We initially created Aslice for the purpose of
                      facilitating DJs sharing their (pre-tax) earnings from
                      gigs with the producers whose music they’ve played in
                      their sets. However, through our conversations with DJs,
                      it’s become clear that some DJs plan to use Aslice to
                      share earnings from occasions such as paid livestreams,
                      Twitch subscriptions, or just because they want to. We’re
                      happy to facilitate that as well, and are excited to see
                      all of the different paths people explore in pursuit of a
                      fairer music economy.</span
                    >
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-7"
                :class="searchHash === 'general-info-7' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-7-btn"
                  v-b-toggle="'general-info-7'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-7')"
                >
                  <div class="faq-title">
                    Is this just for electronic music? & Should Only Higher-Earning DJs Share Playlists? Is Aslice for all DJs?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-7')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      No! The service is focused on performers (DJs) sharing
                      with creators (producers), but that extends across all
                      genres and styles of.
                      <br><br>
                      Aslice is for every working DJ of every music genre who gets paid to play music made by other artists.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-72"
                :class="searchHash === 'general-info-72' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-72-btn"
                  v-b-toggle="'general-info-72'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-72')"
                >
                  <div class="faq-title">
                    How much should working DJs share with producers? What is the minimum amount DJs can share to upload a playlist?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-72')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-72"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span
                    > We suggest that working DJs share 5% of their gig fee with producers whose music they play. Our “5% Sharing Model” is based on a fair and affordable percentage, so that every working DJ can contribute equally based on their earnings. Sharing 5% is our suggestion, because it is the feasible and ideal share amount that would make a valuable impact for global music producers.</span
                    >
                    <br><br>
                    <span
                    >However, working DJs are free to share more or less than 5% of their paid gig fee with producers they play. Sharing is flexible and easy to tailor to each DJs financial situation, starting at an affordable playlist upload minimum of just 10 $/£/€, based on your selected currency preference.</span
                    >
                    <br><br>
                    <span
                    >Important Note: The amount of money DJs choose to share is always private from the public and producers.</span
                    >
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-8"
                :class="searchHash === 'general-info-8' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-8-btn"
                  v-b-toggle="'general-info-8'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-8')"
                >
                  <div class="faq-title">
                    How much does Aslice take as a fee? & Why does Aslice take a fee?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-8')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      It's a simple formula—Aslice takes 15% of the money paid
                      out to producers. As such, producers will receive 85 cents
                      of every dollar that DJs have shared with them.
                      <br><br>
                      We have built, from scratch, an intelligent software that
                      does a lot of the work to operate this service, but aside
                      from that, human employees are still needed to verify
                      accounts, approve payments, check playlists and interact
                      with DJs, producers and other relevant parties to keep
                      this service operating smoothly and efficiently. Simply
                      put, it costs money to run Aslice, and the fees pay for
                      that.
                      <br /><br />
                      <div class="col-12 accordion-additional-content">
                        <div class="row">
                          <div
                              class="col-lg-6 col-12 accordion-additional-content-left"
                          >
                            <span class="svg-wrapper">
                              <svg
                                  fill="none"
                                  height="148"
                                  style="position: absolute; top: 0; left: 0;"
                                  viewBox="0 0 114 148"
                                  width="114"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                    d="M113.12 112.88L5.75999 147.76C-13.5 88.47 18.95 24.79 78.24 5.52C90.09 1.67 100.65 0 113.12 0V112.88Z"
                                    fill="#442671"
                                />
                              </svg>
                              <svg
                                  fill="none"
                                  height="93"
                                  style="position: absolute; top: 112px; left: 5px;"
                                  viewBox="0 0 109 93"
                                  width="109"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                    d="M108.12 0.880005L41.77 92.2C21.6 77.54 8.47002 59.48 0.77002 35.76L108.12 0.880005Z"
                                    fill="#231F20"
                                />
                              </svg>
                              <svg
                                  fill="none"
                                  height="113"
                                  style="position: absolute; top: 0; right: 12px;"
                                  viewBox="0 0 92 113"
                                  width="92"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                    d="M0.120117 112.88V0C37.5201 0 69.4501 16.27 91.4401 46.53L0.120117 112.88Z"
                                    fill="#69499D"
                                />
                              </svg>
                              <svg
                                  fill="none"
                                  height="175"
                                  style="position: absolute; top: 46px; right: -9px;"
                                  viewBox="0 0 113 175"
                                  width="113"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                    d="M0.120117 66.88L91.4401 0.530029C128.08 50.96 116.9 121.55 66.4701 158.19C56.3801 165.52 46.8601 170.37 35.0001 174.22L0.120117 66.88Z"
                                    fill="#75707B"
                                />
                              </svg>
                              <svg
                                  fill="none"
                                  height="115"
                                  style="position: absolute; top: 112px; right: 69px;"
                                  viewBox="0 0 102 115"
                                  width="102"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                    d="M67.12 0.880005L102 108.23C66.43 119.79 31.03 114.18 0.77002 92.2L67.12 0.880005Z"
                                    fill="#AAA3B1"
                                />
                              </svg>
                              <svg
                                  fill="none"
                                  height="145"
                                  style="position: absolute; top: 40px; right: 31px;"
                                  viewBox="0 0 145 145"
                                  width="145"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                    d="M72.0999 144.05C111.864 144.05 144.1 111.815 144.1 72.05C144.1 32.2855 111.864 0.0500488 72.0999 0.0500488C32.3354 0.0500488 0.0998535 32.2855 0.0998535 72.05C0.0998535 111.815 32.3354 144.05 72.0999 144.05Z"
                                    fill="#F2F1EF"
                                />
                              </svg>
                            </span>
                          </div>
                          <div
                              class="col-lg-6 col-12 accordion-additional-content-right"
                          >
                            <p class="add-content-title">
                              Projected cost distribution
                            </p>
                            <div class="row each-row">
                              <div class="col-12">
                                <span
                                    class="accordion-dot-icon light-purple-dot"
                                ></span
                                ><span class="percentage-wrapper">15%</span
                              ><span class="acc-text-wrapper"
                              >Operating Costs</span
                              >
                              </div>
                            </div>
                            <div class="row each-row">
                              <div class="col-12">
                                <span class="accordion-dot-icon gray-dot"></span
                                ><span class="percentage-wrapper">30%</span
                              ><span class="acc-text-wrapper"
                              >Staff & Customer Support</span
                              >
                              </div>
                            </div>
                            <div class="row each-row">
                              <div class="col-12">
                                <span
                                    class="accordion-dot-icon light-gray-dot"
                                ></span
                                ><span class="percentage-wrapper">15%</span
                              ><span class="acc-text-wrapper"
                              >Margin & Growth</span
                              >
                              </div>
                            </div>
                            <div class="row each-row">
                              <div class="col-12">
                                <span
                                    class="accordion-dot-icon black-dot"
                                ></span
                                ><span class="percentage-wrapper">10%</span
                              ><span class="acc-text-wrapper"
                              >Product Development</span
                              >
                              </div>
                            </div>
                            <div class="row each-row">
                              <div class="col-12">
                                <span
                                    class="accordion-dot-icon purple-dot"
                                ></span
                                ><span class="percentage-wrapper">30%</span
                              ><span class="acc-text-wrapper"
                              >Financial Transactions & Transfers</span
                              >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-10"
                :class="searchHash === 'general-info-10' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-10-btn"
                  v-b-toggle="'general-info-10'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-10')"
                >
                  <div class="faq-title">
                    I’m a DJ. How do I pay and is there a minimum fee?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-10')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-10"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Once you register, get verified and start to build your
                      profile, just connect your credit card via Stripe* and
                      we’ll handle the rest. DJs pay when they submit playlists
                      and enter an amount to share with producers.
                      <br /><br />
                      At the moment, we have set a minimum fee of $10 for
                      playlist submissions. We’re working to lower this or
                      eliminate it entirely in the future.
                      <br /><br />
                      *Stripe is our current default to send payments, although
                      we are in the process of considering additional payment
                      services.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-11"
                :class="searchHash === 'general-info-11' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-11-btn"
                  v-b-toggle="'general-info-11'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-11')"
                >
                  <div class="faq-title">
                    I’m a producer. How often will I get paid and when will
                    these payments arrive?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-11')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-11"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      After you register and get verified, you are eligible to receive payments. Producers get paid automatically on a quarterly basis, as long as they reach a minimum quarterly threshold of $50. If that minimum is not met, the outstanding balance will roll over into the next quarter.
                      <br /><br />
                      Payouts are made via PayPal or bank transfer (Wise). To select your preferred payout method, visit the “Payments” tab of the online user dashboard.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-12"
                :class="searchHash === 'general-info-12' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-12-btn"
                  v-b-toggle="'general-info-12'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-12')"
                >
                  <div class="faq-title">
                    How does Aslice identify and match music correctly?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-12')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-12"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      We collect DJs playlists. By using playlists directly from the source, we have an accurate list of what songs the DJ has played from the songs metadata.
                      <br /><br />
                      Then, we cross reference music metadata. We match all songs in the DJs playlists against a mix of public and proprietary databases to verify the songs officially attributed producer(s) before distributing payments. This secondary layer of verification ensures that the money the DJs share goes to the right place.
                      <br /><br />
                      Our intelligent machine learning algorithm has also been designed to recognize typos, misspellings and misattributions, and correct them once a track has been matched. For producers, we also encourage the use of <a href="?anchor=producer-info-3">Aslice ID numbers</a>, which can be used to easily identify unreleased music.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-13"
                :class="searchHash === 'general-info-13' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-13-btn"
                  v-b-toggle="'general-info-13'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-13')"
                >
                  <div class="faq-title">
                    Who gets paid by Aslice when a song is played by a
                    participating DJ?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-13')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-13"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice assigns payment based on both the credited artist
                      in the Artist field and any guest artists credited in the
                      Song Title field of published music databases.
                      <br /><br />
                      <div class="col-12 accordion-additional-content">
                        <div class="row">
                          <div class="col-lg-4 col-12">
                            <p
                              class="add-content-title add-content-title-height text-center"
                            >
                              PRODUCER <br />
                              + ARTIST FEATURE
                            </p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M108.505 108.505V217.01C48.5811 217 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                fill="none"
                                height="217"
                                style="position: absolute; top: 0; bottom: 0; right: 0; margin: auto;"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M0.504883 108.505V0C60.4286 0 109.01 48.5811 109.01 108.505C109.01 168.429 60.4286 217.01 0.504883 217.01V108.505Z"
                                  fill="#75707B"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="50"
                                viewBox="0 0 93 50"
                                width="93"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M34.5285 1.95886H30.7845L30.5445 5.16286H30.6285C30.8365 4.88286 31.0685 4.66286 31.3245 4.50286C31.5805 4.33486 31.9325 4.25086 32.3805 4.25086C32.7485 4.25086 33.0845 4.31086 33.3885 4.43086C33.7005 4.54286 33.9685 4.71086 34.1925 4.93486C34.4165 5.15886 34.5925 5.43086 34.7205 5.75086C34.8485 6.06286 34.9125 6.42286 34.9125 6.83086C34.9125 7.23886 34.8485 7.61486 34.7205 7.95886C34.5925 8.29486 34.4045 8.58686 34.1565 8.83486C33.9085 9.07486 33.6085 9.26286 33.2565 9.39886C32.9045 9.53486 32.5045 9.60286 32.0565 9.60286C31.7045 9.60286 31.3885 9.56286 31.1085 9.48286C30.8365 9.40286 30.5925 9.29486 30.3765 9.15886C30.1685 9.02286 29.9845 8.87086 29.8245 8.70286C29.6645 8.53486 29.5205 8.35886 29.3925 8.17486L30.1485 7.59886C30.2605 7.76686 30.3725 7.91886 30.4845 8.05486C30.6045 8.19086 30.7405 8.31086 30.8925 8.41486C31.0445 8.51086 31.2165 8.58686 31.4085 8.64286C31.6005 8.69886 31.8245 8.72686 32.0805 8.72686C32.6565 8.72686 33.0965 8.57086 33.4005 8.25886C33.7125 7.94686 33.8685 7.51486 33.8685 6.96286V6.86686C33.8685 6.31486 33.7125 5.88286 33.4005 5.57086C33.0885 5.25886 32.6405 5.10286 32.0565 5.10286C31.6565 5.10286 31.3445 5.17086 31.1205 5.30686C30.9045 5.44286 30.7045 5.61086 30.5205 5.81086L29.6685 5.69086L29.9685 1.08286H34.5285V1.95886ZM39.3118 9.60286C38.7998 9.60286 38.3598 9.50686 37.9918 9.31486C37.6238 9.11486 37.3198 8.83086 37.0798 8.46286C36.8398 8.09486 36.6638 7.64286 36.5518 7.10686C36.4398 6.57086 36.3838 5.95886 36.3838 5.27086C36.3838 4.59086 36.4398 3.98286 36.5518 3.44686C36.6638 2.90286 36.8398 2.44686 37.0798 2.07886C37.3198 1.71086 37.6238 1.43086 37.9918 1.23886C38.3598 1.03886 38.7998 0.938862 39.3118 0.938862C39.8238 0.938862 40.2638 1.03886 40.6318 1.23886C40.9998 1.43086 41.3038 1.71086 41.5438 2.07886C41.7838 2.44686 41.9598 2.90286 42.0718 3.44686C42.1838 3.98286 42.2398 4.59086 42.2398 5.27086C42.2398 5.95886 42.1838 6.57086 42.0718 7.10686C41.9598 7.64286 41.7838 8.09486 41.5438 8.46286C41.3038 8.83086 40.9998 9.11486 40.6318 9.31486C40.2638 9.50686 39.8238 9.60286 39.3118 9.60286ZM39.3118 8.72686C39.6478 8.72686 39.9358 8.66286 40.1758 8.53486C40.4158 8.39886 40.6078 8.21086 40.7518 7.97086C40.9038 7.73086 41.0158 7.44286 41.0878 7.10686C41.1598 6.76286 41.1958 6.37886 41.1958 5.95486V4.58686C41.1958 4.17086 41.1598 3.79086 41.0878 3.44686C41.0158 3.10286 40.9038 2.81086 40.7518 2.57086C40.6078 2.33086 40.4158 2.14686 40.1758 2.01886C39.9358 1.88286 39.6478 1.81486 39.3118 1.81486C38.9758 1.81486 38.6878 1.88286 38.4478 2.01886C38.2078 2.14686 38.0118 2.33086 37.8598 2.57086C37.7158 2.81086 37.6078 3.10286 37.5358 3.44686C37.4638 3.79086 37.4278 4.17086 37.4278 4.58686V5.95486C37.4278 6.37886 37.4638 6.76286 37.5358 7.10686C37.6078 7.44286 37.7158 7.73086 37.8598 7.97086C38.0118 8.21086 38.2078 8.39886 38.4478 8.53486C38.6878 8.66286 38.9758 8.72686 39.3118 8.72686ZM39.3118 5.97886C39.0318 5.97886 38.8358 5.92286 38.7238 5.81086C38.6198 5.69886 38.5678 5.56286 38.5678 5.40286V5.13886C38.5678 4.97886 38.6198 4.84286 38.7238 4.73086C38.8358 4.61886 39.0318 4.56286 39.3118 4.56286C39.5918 4.56286 39.7838 4.61886 39.8878 4.73086C39.9998 4.84286 40.0558 4.97886 40.0558 5.13886V5.40286C40.0558 5.56286 39.9998 5.69886 39.8878 5.81086C39.7838 5.92286 39.5918 5.97886 39.3118 5.97886ZM43.9871 11.1149L48.1631 0.338862H49.0271L44.8511 11.1149H43.9871ZM56.1144 1.95886H52.3704L52.1304 5.16286H52.2144C52.4224 4.88286 52.6544 4.66286 52.9104 4.50286C53.1664 4.33486 53.5184 4.25086 53.9664 4.25086C54.3344 4.25086 54.6704 4.31086 54.9744 4.43086C55.2864 4.54286 55.5544 4.71086 55.7784 4.93486C56.0024 5.15886 56.1784 5.43086 56.3064 5.75086C56.4344 6.06286 56.4984 6.42286 56.4984 6.83086C56.4984 7.23886 56.4344 7.61486 56.3064 7.95886C56.1784 8.29486 55.9904 8.58686 55.7424 8.83486C55.4944 9.07486 55.1944 9.26286 54.8424 9.39886C54.4904 9.53486 54.0904 9.60286 53.6424 9.60286C53.2904 9.60286 52.9744 9.56286 52.6944 9.48286C52.4224 9.40286 52.1784 9.29486 51.9624 9.15886C51.7544 9.02286 51.5704 8.87086 51.4104 8.70286C51.2504 8.53486 51.1064 8.35886 50.9784 8.17486L51.7344 7.59886C51.8464 7.76686 51.9584 7.91886 52.0704 8.05486C52.1904 8.19086 52.3264 8.31086 52.4784 8.41486C52.6304 8.51086 52.8024 8.58686 52.9944 8.64286C53.1864 8.69886 53.4104 8.72686 53.6664 8.72686C54.2424 8.72686 54.6824 8.57086 54.9864 8.25886C55.2984 7.94686 55.4544 7.51486 55.4544 6.96286V6.86686C55.4544 6.31486 55.2984 5.88286 54.9864 5.57086C54.6744 5.25886 54.2264 5.10286 53.6424 5.10286C53.2424 5.10286 52.9304 5.17086 52.7064 5.30686C52.4904 5.44286 52.2904 5.61086 52.1064 5.81086L51.2544 5.69086L51.5544 1.08286H56.1144V1.95886ZM60.8977 9.60286C60.3857 9.60286 59.9457 9.50686 59.5777 9.31486C59.2097 9.11486 58.9057 8.83086 58.6657 8.46286C58.4257 8.09486 58.2497 7.64286 58.1377 7.10686C58.0257 6.57086 57.9697 5.95886 57.9697 5.27086C57.9697 4.59086 58.0257 3.98286 58.1377 3.44686C58.2497 2.90286 58.4257 2.44686 58.6657 2.07886C58.9057 1.71086 59.2097 1.43086 59.5777 1.23886C59.9457 1.03886 60.3857 0.938862 60.8977 0.938862C61.4097 0.938862 61.8497 1.03886 62.2177 1.23886C62.5857 1.43086 62.8897 1.71086 63.1297 2.07886C63.3697 2.44686 63.5457 2.90286 63.6577 3.44686C63.7697 3.98286 63.8257 4.59086 63.8257 5.27086C63.8257 5.95886 63.7697 6.57086 63.6577 7.10686C63.5457 7.64286 63.3697 8.09486 63.1297 8.46286C62.8897 8.83086 62.5857 9.11486 62.2177 9.31486C61.8497 9.50686 61.4097 9.60286 60.8977 9.60286ZM60.8977 8.72686C61.2337 8.72686 61.5217 8.66286 61.7617 8.53486C62.0017 8.39886 62.1937 8.21086 62.3377 7.97086C62.4897 7.73086 62.6017 7.44286 62.6737 7.10686C62.7457 6.76286 62.7817 6.37886 62.7817 5.95486V4.58686C62.7817 4.17086 62.7457 3.79086 62.6737 3.44686C62.6017 3.10286 62.4897 2.81086 62.3377 2.57086C62.1937 2.33086 62.0017 2.14686 61.7617 2.01886C61.5217 1.88286 61.2337 1.81486 60.8977 1.81486C60.5617 1.81486 60.2737 1.88286 60.0337 2.01886C59.7937 2.14686 59.5977 2.33086 59.4457 2.57086C59.3017 2.81086 59.1937 3.10286 59.1217 3.44686C59.0497 3.79086 59.0137 4.17086 59.0137 4.58686V5.95486C59.0137 6.37886 59.0497 6.76286 59.1217 7.10686C59.1937 7.44286 59.3017 7.73086 59.4457 7.97086C59.5977 8.21086 59.7937 8.39886 60.0337 8.53486C60.2737 8.66286 60.5617 8.72686 60.8977 8.72686ZM60.8977 5.97886C60.6177 5.97886 60.4217 5.92286 60.3097 5.81086C60.2057 5.69886 60.1537 5.56286 60.1537 5.40286V5.13886C60.1537 4.97886 60.2057 4.84286 60.3097 4.73086C60.4217 4.61886 60.6177 4.56286 60.8977 4.56286C61.1777 4.56286 61.3697 4.61886 61.4737 4.73086C61.5857 4.84286 61.6417 4.97886 61.6417 5.13886V5.40286C61.6417 5.56286 61.5857 5.69886 61.4737 5.81086C61.3697 5.92286 61.1777 5.97886 60.8977 5.97886ZM3.31124 29.6029C2.55924 29.6029 1.94324 29.4669 1.46324 29.1949C0.983245 28.9149 0.587245 28.5589 0.275245 28.1269L1.00724 27.5269C1.33524 27.9349 1.67924 28.2389 2.03924 28.4389C2.40724 28.6389 2.84324 28.7389 3.34725 28.7389C3.95524 28.7389 4.41924 28.5989 4.73925 28.3189C5.05924 28.0389 5.21924 27.6469 5.21924 27.1429C5.21924 26.7349 5.10325 26.4189 4.87125 26.1949C4.63925 25.9629 4.23524 25.7989 3.65925 25.7029L2.72324 25.5469C2.31524 25.4749 1.97124 25.3669 1.69124 25.2229C1.41924 25.0789 1.19924 24.9069 1.03124 24.7069C0.863245 24.4989 0.743245 24.2749 0.671245 24.0349C0.599245 23.7869 0.563245 23.5309 0.563245 23.2669C0.563245 22.4989 0.815245 21.9189 1.31924 21.5269C1.82324 21.1349 2.50324 20.9389 3.35924 20.9389C4.03124 20.9389 4.59524 21.0509 5.05124 21.2749C5.51525 21.4989 5.88725 21.8149 6.16724 22.2229L5.45925 22.8349C5.22724 22.5309 4.94724 22.2829 4.61924 22.0909C4.29124 21.8989 3.86725 21.8029 3.34725 21.8029C2.77924 21.8029 2.34324 21.9229 2.03924 22.1629C1.73524 22.4029 1.58324 22.7629 1.58324 23.2429C1.58324 23.6189 1.69524 23.9269 1.91924 24.1669C2.15124 24.3989 2.56324 24.5669 3.15525 24.6709L4.05524 24.8269C4.46324 24.8989 4.80724 25.0069 5.08724 25.1509C5.36725 25.2949 5.59125 25.4669 5.75925 25.6669C5.93525 25.8669 6.05925 26.0909 6.13125 26.3389C6.20325 26.5869 6.23925 26.8469 6.23925 27.1189C6.23925 27.8949 5.98325 28.5029 5.47124 28.9429C4.96724 29.3829 4.24724 29.6029 3.31124 29.6029ZM8.07056 23.2669H9.03056V24.2749H9.07856C9.47856 23.5069 10.1146 23.1229 10.9866 23.1229C11.7466 23.1229 12.3386 23.4069 12.7626 23.9749C13.1946 24.5429 13.4106 25.3389 13.4106 26.3629C13.4106 27.3869 13.1946 28.1829 12.7626 28.7509C12.3386 29.3189 11.7466 29.6029 10.9866 29.6029C10.1146 29.6029 9.47856 29.2189 9.07856 28.4509H9.03056V31.8589H8.07056V23.2669ZM10.6146 28.7509C11.1746 28.7509 11.6066 28.5829 11.9106 28.2469C12.2226 27.9029 12.3786 27.4509 12.3786 26.8909V25.8349C12.3786 25.2749 12.2226 24.8269 11.9106 24.4909C11.6066 24.1469 11.1746 23.9749 10.6146 23.9749C10.3986 23.9749 10.1946 24.0029 10.0026 24.0589C9.81056 24.1149 9.64256 24.1989 9.49856 24.3109C9.35456 24.4149 9.23856 24.5469 9.15056 24.7069C9.07056 24.8589 9.03056 25.0389 9.03056 25.2469V27.4789C9.03056 27.6869 9.07056 27.8709 9.15056 28.0309C9.23856 28.1829 9.35456 28.3149 9.49856 28.4269C9.64256 28.5309 9.81056 28.6109 10.0026 28.6669C10.1946 28.7229 10.3986 28.7509 10.6146 28.7509ZM15.0859 28.6429H17.2459V21.3949H15.0859V20.5789H18.2059V28.6429H20.3659V29.4589H15.0859V28.6429ZM25.3052 21.8989C25.0252 21.8989 24.8292 21.8429 24.7172 21.7309C24.6052 21.6109 24.5492 21.4629 24.5492 21.2869V21.0949C24.5492 20.9189 24.6052 20.7749 24.7172 20.6629C24.8292 20.5429 25.0252 20.4829 25.3052 20.4829C25.5852 20.4829 25.7812 20.5429 25.8932 20.6629C26.0052 20.7749 26.0612 20.9189 26.0612 21.0949V21.2869C26.0612 21.4629 26.0052 21.6109 25.8932 21.7309C25.7812 21.8429 25.5852 21.8989 25.3052 21.8989ZM22.5932 28.6429H24.8252V24.0829H22.5932V23.2669H25.7852V28.6429H27.8732V29.4589H22.5932V28.6429ZM32.4165 29.4589C31.9445 29.4589 31.5965 29.3269 31.3725 29.0629C31.1565 28.7989 31.0485 28.4589 31.0485 28.0429V24.0829H28.9845V23.2669H30.5205C30.7285 23.2669 30.8725 23.2269 30.9525 23.1469C31.0405 23.0589 31.0845 22.9109 31.0845 22.7029V21.0829H32.0085V23.2669H34.8285V24.0829H32.0085V28.6429H34.8285V29.4589H32.4165ZM44.0471 20.5789H45.0071V24.2749H45.0551C45.4551 23.5069 46.0911 23.1229 46.9631 23.1229C47.7231 23.1229 48.3151 23.4069 48.7391 23.9749C49.1711 24.5429 49.3871 25.3389 49.3871 26.3629C49.3871 27.3869 49.1711 28.1829 48.7391 28.7509C48.3151 29.3189 47.7231 29.6029 46.9631 29.6029C46.0911 29.6029 45.4551 29.2189 45.0551 28.4509H45.0071V29.4589H44.0471V20.5789ZM46.5911 28.7509C47.1511 28.7509 47.5831 28.5829 47.8871 28.2469C48.1991 27.9029 48.3551 27.4509 48.3551 26.8909V25.8349C48.3551 25.2749 48.1991 24.8269 47.8871 24.4909C47.5831 24.1469 47.1511 23.9749 46.5911 23.9749C46.3751 23.9749 46.1711 24.0029 45.9791 24.0589C45.7871 24.1149 45.6191 24.1989 45.4751 24.3109C45.3311 24.4149 45.2151 24.5469 45.1271 24.7069C45.0471 24.8589 45.0071 25.0389 45.0071 25.2469V27.4789C45.0071 27.6869 45.0471 27.8709 45.1271 28.0309C45.2151 28.1829 45.3311 28.3149 45.4751 28.4269C45.6191 28.5309 45.7871 28.6109 45.9791 28.6669C46.1711 28.7229 46.3751 28.7509 46.5911 28.7509ZM53.8104 29.6029C53.3624 29.6029 52.9584 29.5269 52.5984 29.3749C52.2464 29.2229 51.9424 29.0069 51.6864 28.7269C51.4384 28.4389 51.2464 28.0989 51.1104 27.7069C50.9744 27.3069 50.9064 26.8629 50.9064 26.3749C50.9064 25.8789 50.9744 25.4309 51.1104 25.0309C51.2544 24.6309 51.4504 24.2909 51.6984 24.0109C51.9464 23.7229 52.2424 23.5029 52.5864 23.3509C52.9384 23.1989 53.3264 23.1229 53.7504 23.1229C54.1664 23.1229 54.5424 23.1989 54.8784 23.3509C55.2224 23.5029 55.5144 23.7149 55.7544 23.9869C55.9944 24.2509 56.1784 24.5669 56.3064 24.9349C56.4344 25.3029 56.4984 25.7069 56.4984 26.1469V26.6029H51.9144V26.8909C51.9144 27.1629 51.9584 27.4149 52.0464 27.6469C52.1344 27.8789 52.2584 28.0789 52.4184 28.2469C52.5864 28.4149 52.7864 28.5469 53.0184 28.6429C53.2584 28.7309 53.5224 28.7749 53.8104 28.7749C54.2264 28.7749 54.5864 28.6789 54.8904 28.4869C55.1944 28.2949 55.4264 28.0309 55.5864 27.6949L56.2944 28.1749C56.1104 28.5909 55.8024 28.9349 55.3704 29.2069C54.9464 29.4709 54.4264 29.6029 53.8104 29.6029ZM53.7504 23.9149C53.4864 23.9149 53.2424 23.9629 53.0184 24.0589C52.7944 24.1549 52.5984 24.2869 52.4304 24.4549C52.2704 24.6229 52.1424 24.8229 52.0464 25.0549C51.9584 25.2789 51.9144 25.5269 51.9144 25.7989V25.8829H55.4664V25.7509C55.4664 25.4789 55.4224 25.2309 55.3344 25.0069C55.2544 24.7829 55.1384 24.5909 54.9864 24.4309C54.8424 24.2629 54.6624 24.1349 54.4464 24.0469C54.2384 23.9589 54.0064 23.9149 53.7504 23.9149ZM61.1977 29.4589C60.7257 29.4589 60.3777 29.3269 60.1537 29.0629C59.9377 28.7989 59.8297 28.4589 59.8297 28.0429V24.0829H57.7657V23.2669H59.3017C59.5097 23.2669 59.6537 23.2269 59.7337 23.1469C59.8217 23.0589 59.8657 22.9109 59.8657 22.7029V21.0829H60.7897V23.2669H63.6097V24.0829H60.7897V28.6429H63.6097V29.4589H61.1977ZM64.8531 23.2669H65.7051L66.4131 28.6189H66.5211L67.5771 23.2669H68.6331L69.6891 28.6189H69.7971L70.5051 23.2669H71.3331L70.3851 29.4589H69.1371L68.1531 24.2749H68.0571L67.0491 29.4589H65.8011L64.8531 23.2669ZM75.3964 29.6029C74.9484 29.6029 74.5444 29.5269 74.1844 29.3749C73.8324 29.2229 73.5284 29.0069 73.2724 28.7269C73.0244 28.4389 72.8324 28.0989 72.6964 27.7069C72.5604 27.3069 72.4924 26.8629 72.4924 26.3749C72.4924 25.8789 72.5604 25.4309 72.6964 25.0309C72.8404 24.6309 73.0364 24.2909 73.2844 24.0109C73.5324 23.7229 73.8284 23.5029 74.1724 23.3509C74.5244 23.1989 74.9124 23.1229 75.3364 23.1229C75.7524 23.1229 76.1284 23.1989 76.4644 23.3509C76.8084 23.5029 77.1004 23.7149 77.3404 23.9869C77.5804 24.2509 77.7644 24.5669 77.8924 24.9349C78.0204 25.3029 78.0844 25.7069 78.0844 26.1469V26.6029H73.5004V26.8909C73.5004 27.1629 73.5444 27.4149 73.6324 27.6469C73.7204 27.8789 73.8444 28.0789 74.0044 28.2469C74.1724 28.4149 74.3724 28.5469 74.6044 28.6429C74.8444 28.7309 75.1084 28.7749 75.3964 28.7749C75.8124 28.7749 76.1724 28.6789 76.4764 28.4869C76.7804 28.2949 77.0124 28.0309 77.1724 27.6949L77.8804 28.1749C77.6964 28.5909 77.3884 28.9349 76.9564 29.2069C76.5324 29.4709 76.0124 29.6029 75.3964 29.6029ZM75.3364 23.9149C75.0724 23.9149 74.8284 23.9629 74.6044 24.0589C74.3804 24.1549 74.1844 24.2869 74.0164 24.4549C73.8564 24.6229 73.7284 24.8229 73.6324 25.0549C73.5444 25.2789 73.5004 25.5269 73.5004 25.7989V25.8829H77.0524V25.7509C77.0524 25.4789 77.0084 25.2309 76.9204 25.0069C76.8404 24.7829 76.7244 24.5909 76.5724 24.4309C76.4284 24.2629 76.2484 24.1349 76.0324 24.0469C75.8244 23.9589 75.5924 23.9149 75.3364 23.9149ZM82.5917 29.6029C82.1437 29.6029 81.7397 29.5269 81.3797 29.3749C81.0277 29.2229 80.7237 29.0069 80.4677 28.7269C80.2197 28.4389 80.0277 28.0989 79.8917 27.7069C79.7557 27.3069 79.6877 26.8629 79.6877 26.3749C79.6877 25.8789 79.7557 25.4309 79.8917 25.0309C80.0357 24.6309 80.2317 24.2909 80.4797 24.0109C80.7277 23.7229 81.0237 23.5029 81.3677 23.3509C81.7197 23.1989 82.1077 23.1229 82.5317 23.1229C82.9477 23.1229 83.3237 23.1989 83.6597 23.3509C84.0037 23.5029 84.2957 23.7149 84.5357 23.9869C84.7757 24.2509 84.9597 24.5669 85.0877 24.9349C85.2157 25.3029 85.2797 25.7069 85.2797 26.1469V26.6029H80.6957V26.8909C80.6957 27.1629 80.7397 27.4149 80.8277 27.6469C80.9157 27.8789 81.0397 28.0789 81.1997 28.2469C81.3677 28.4149 81.5677 28.5469 81.7997 28.6429C82.0397 28.7309 82.3037 28.7749 82.5917 28.7749C83.0077 28.7749 83.3677 28.6789 83.6717 28.4869C83.9757 28.2949 84.2077 28.0309 84.3677 27.6949L85.0757 28.1749C84.8917 28.5909 84.5837 28.9349 84.1517 29.2069C83.7277 29.4709 83.2077 29.6029 82.5917 29.6029ZM82.5317 23.9149C82.2677 23.9149 82.0237 23.9629 81.7997 24.0589C81.5757 24.1549 81.3797 24.2869 81.2117 24.4549C81.0517 24.6229 80.9237 24.8229 80.8277 25.0549C80.7397 25.2789 80.6957 25.5269 80.6957 25.7989V25.8829H84.2477V25.7509C84.2477 25.4789 84.2037 25.2309 84.1157 25.0069C84.0357 24.7829 83.9197 24.5909 83.7677 24.4309C83.6237 24.2629 83.4437 24.1349 83.2277 24.0469C83.0197 23.9589 82.7877 23.9149 82.5317 23.9149ZM87.255 29.4589V23.2669H88.215V24.2749H88.263C88.327 24.1229 88.407 23.9789 88.503 23.8429C88.599 23.6989 88.715 23.5749 88.851 23.4709C88.995 23.3669 89.163 23.2829 89.355 23.2189C89.547 23.1549 89.771 23.1229 90.027 23.1229C90.675 23.1229 91.195 23.3309 91.587 23.7469C91.979 24.1549 92.175 24.7349 92.175 25.4869V29.4589H91.215V25.6549C91.215 25.0869 91.091 24.6669 90.843 24.3949C90.595 24.1149 90.231 23.9749 89.751 23.9749C89.559 23.9749 89.371 23.9989 89.187 24.0469C89.003 24.0949 88.839 24.1669 88.695 24.2629C88.551 24.3589 88.435 24.4829 88.347 24.6349C88.259 24.7869 88.215 24.9629 88.215 25.1629V29.4589H87.255ZM27.2612 49.4589C26.8852 49.4589 26.6172 49.3629 26.4572 49.1709C26.2972 48.9789 26.1972 48.7389 26.1572 48.4509H26.0972C25.9612 48.8109 25.7412 49.0949 25.4372 49.3029C25.1412 49.5029 24.7412 49.6029 24.2372 49.6029C23.5892 49.6029 23.0732 49.4349 22.6892 49.0989C22.3052 48.7629 22.1132 48.3029 22.1132 47.7189C22.1132 47.1429 22.3212 46.6989 22.7372 46.3869C23.1612 46.0749 23.8412 45.9189 24.7772 45.9189H26.0972V45.3069C26.0972 44.8509 25.9692 44.5109 25.7132 44.2869C25.4572 44.0549 25.0932 43.9389 24.6212 43.9389C24.2052 43.9389 23.8652 44.0229 23.6012 44.1909C23.3372 44.3509 23.1252 44.5709 22.9652 44.8509L22.3172 44.3709C22.3972 44.2109 22.5052 44.0549 22.6412 43.9029C22.7772 43.7509 22.9452 43.6189 23.1452 43.5069C23.3452 43.3869 23.5732 43.2949 23.8292 43.2309C24.0852 43.1589 24.3692 43.1229 24.6812 43.1229C25.4092 43.1229 25.9852 43.3069 26.4092 43.6749C26.8412 44.0429 27.0572 44.5549 27.0572 45.2109V48.6189H27.9212V49.4589H27.2612ZM24.4052 48.7989C24.6532 48.7989 24.8772 48.7709 25.0772 48.7149C25.2852 48.6509 25.4652 48.5709 25.6172 48.4749C25.7692 48.3709 25.8852 48.2509 25.9652 48.1149C26.0532 47.9709 26.0972 47.8189 26.0972 47.6589V46.6389H24.7772C24.2012 46.6389 23.7812 46.7189 23.5172 46.8789C23.2532 47.0389 23.1212 47.2709 23.1212 47.5749V47.8269C23.1212 48.1469 23.2332 48.3909 23.4572 48.5589C23.6892 48.7189 24.0052 48.7989 24.4052 48.7989ZM29.4405 48.6429H31.2525V44.0829H29.4405V43.2669H32.2125V44.8269H32.2725C32.4005 44.3389 32.6405 43.9589 32.9925 43.6869C33.3525 43.4069 33.8085 43.2669 34.3605 43.2669H35.2245V44.2269H34.0605C33.5085 44.2269 33.0605 44.3869 32.7165 44.7069C32.3805 45.0269 32.2125 45.4469 32.2125 45.9669V48.6429H34.6125V49.4589H29.4405V48.6429ZM39.6118 49.4589C39.1398 49.4589 38.7918 49.3269 38.5678 49.0629C38.3518 48.7989 38.2438 48.4589 38.2438 48.0429V44.0829H36.1798V43.2669H37.7158C37.9238 43.2669 38.0678 43.2269 38.1478 43.1469C38.2358 43.0589 38.2798 42.9109 38.2798 42.7029V41.0829H39.2038V43.2669H42.0238V44.0829H39.2038V48.6429H42.0238V49.4589H39.6118ZM46.8911 41.8989C46.6111 41.8989 46.4151 41.8429 46.3031 41.7309C46.1911 41.6109 46.1351 41.4629 46.1351 41.2869V41.0949C46.1351 40.9189 46.1911 40.7749 46.3031 40.6629C46.4151 40.5429 46.6111 40.4829 46.8911 40.4829C47.1711 40.4829 47.3671 40.5429 47.4791 40.6629C47.5911 40.7749 47.6471 40.9189 47.6471 41.0949V41.2869C47.6471 41.4629 47.5911 41.6109 47.4791 41.7309C47.3671 41.8429 47.1711 41.8989 46.8911 41.8989ZM44.1791 48.6429H46.4111V44.0829H44.1791V43.2669H47.3711V48.6429H49.4591V49.4589H44.1791V48.6429ZM53.7744 49.6029C53.1264 49.6029 52.5664 49.4949 52.0944 49.2789C51.6304 49.0549 51.2344 48.7589 50.9064 48.3909L51.5544 47.8269C51.8504 48.1389 52.1744 48.3789 52.5264 48.5469C52.8784 48.7149 53.3024 48.7989 53.7984 48.7989C54.2784 48.7989 54.6704 48.7149 54.9744 48.5469C55.2864 48.3709 55.4424 48.0989 55.4424 47.7309C55.4424 47.5709 55.4104 47.4389 55.3464 47.3349C55.2904 47.2229 55.2104 47.1349 55.1064 47.0709C55.0024 47.0069 54.8864 46.9589 54.7584 46.9269C54.6304 46.8869 54.4944 46.8549 54.3504 46.8309L53.3784 46.6869C53.1624 46.6549 52.9264 46.6109 52.6704 46.5549C52.4224 46.4989 52.1944 46.4109 51.9864 46.2909C51.7784 46.1629 51.6024 45.9949 51.4584 45.7869C51.3224 45.5789 51.2544 45.3069 51.2544 44.9709C51.2544 44.6589 51.3144 44.3909 51.4344 44.1669C51.5624 43.9349 51.7384 43.7429 51.9624 43.5909C52.1864 43.4309 52.4504 43.3149 52.7544 43.2429C53.0584 43.1629 53.3904 43.1229 53.7504 43.1229C54.3104 43.1229 54.7944 43.2109 55.2024 43.3869C55.6184 43.5629 55.9744 43.8069 56.2704 44.1189L55.6464 44.7069C55.5744 44.6189 55.4824 44.5309 55.3704 44.4429C55.2664 44.3469 55.1344 44.2629 54.9744 44.1909C54.8224 44.1109 54.6424 44.0469 54.4344 43.9989C54.2264 43.9509 53.9864 43.9269 53.7144 43.9269C53.2264 43.9269 52.8504 44.0109 52.5864 44.1789C52.3304 44.3469 52.2024 44.5909 52.2024 44.9109C52.2024 45.0709 52.2304 45.2069 52.2864 45.3189C52.3504 45.4229 52.4344 45.5069 52.5384 45.5709C52.6424 45.6349 52.7584 45.6869 52.8864 45.7269C53.0224 45.7589 53.1584 45.7869 53.2944 45.8109L54.2664 45.9549C54.4904 45.9869 54.7264 46.0309 54.9744 46.0869C55.2224 46.1429 55.4504 46.2349 55.6584 46.3629C55.8664 46.4829 56.0384 46.6469 56.1744 46.8549C56.3184 47.0629 56.3904 47.3349 56.3904 47.6709C56.3904 48.2869 56.1504 48.7629 55.6704 49.0989C55.1984 49.4349 54.5664 49.6029 53.7744 49.6029ZM61.1977 49.4589C60.7257 49.4589 60.3777 49.3269 60.1537 49.0629C59.9377 48.7989 59.8297 48.4589 59.8297 48.0429V44.0829H57.7657V43.2669H59.3017C59.5097 43.2669 59.6537 43.2269 59.7337 43.1469C59.8217 43.0589 59.8657 42.9109 59.8657 42.7029V41.0829H60.7897V43.2669H63.6097V44.0829H60.7897V48.6429H63.6097V49.4589H61.1977ZM68.1651 49.6029C67.5171 49.6029 66.9571 49.4949 66.4851 49.2789C66.0211 49.0549 65.6251 48.7589 65.2971 48.3909L65.9451 47.8269C66.2411 48.1389 66.5651 48.3789 66.9171 48.5469C67.2691 48.7149 67.6931 48.7989 68.1891 48.7989C68.6691 48.7989 69.0611 48.7149 69.3651 48.5469C69.6771 48.3709 69.8331 48.0989 69.8331 47.7309C69.8331 47.5709 69.8011 47.4389 69.7371 47.3349C69.6811 47.2229 69.6011 47.1349 69.4971 47.0709C69.3931 47.0069 69.2771 46.9589 69.1491 46.9269C69.0211 46.8869 68.8851 46.8549 68.7411 46.8309L67.7691 46.6869C67.5531 46.6549 67.3171 46.6109 67.0611 46.5549C66.8131 46.4989 66.5851 46.4109 66.3771 46.2909C66.1691 46.1629 65.9931 45.9949 65.8491 45.7869C65.7131 45.5789 65.6451 45.3069 65.6451 44.9709C65.6451 44.6589 65.7051 44.3909 65.8251 44.1669C65.9531 43.9349 66.1291 43.7429 66.3531 43.5909C66.5771 43.4309 66.8411 43.3149 67.1451 43.2429C67.4491 43.1629 67.7811 43.1229 68.1411 43.1229C68.7011 43.1229 69.1851 43.2109 69.5931 43.3869C70.0091 43.5629 70.3651 43.8069 70.6611 44.1189L70.0371 44.7069C69.9651 44.6189 69.8731 44.5309 69.7611 44.4429C69.6571 44.3469 69.5251 44.2629 69.3651 44.1909C69.2131 44.1109 69.0331 44.0469 68.8251 43.9989C68.6171 43.9509 68.3771 43.9269 68.1051 43.9269C67.6171 43.9269 67.2411 44.0109 66.9771 44.1789C66.7211 44.3469 66.5931 44.5909 66.5931 44.9109C66.5931 45.0709 66.6211 45.2069 66.6771 45.3189C66.7411 45.4229 66.8251 45.5069 66.9291 45.5709C67.0331 45.6349 67.1491 45.6869 67.2771 45.7269C67.4131 45.7589 67.5491 45.7869 67.6851 45.8109L68.6571 45.9549C68.8811 45.9869 69.1171 46.0309 69.3651 46.0869C69.6131 46.1429 69.8411 46.2349 70.0491 46.3629C70.2571 46.4829 70.4291 46.6469 70.5651 46.8549C70.7091 47.0629 70.7811 47.3349 70.7811 47.6709C70.7811 48.2869 70.5411 48.7629 70.0611 49.0989C69.5891 49.4349 68.9571 49.6029 68.1651 49.6029Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col-lg-4 col-12">
                            <p
                              class="add-content-title add-content-title-height text-center"
                            >
                              PRODUCER <br />
                              + ARTIST REMIX
                            </p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M108.505 108.505V217.01C48.5811 217 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                fill="none"
                                height="217"
                                style="position: absolute; top: 0; bottom: 0; right: 0; margin: auto;"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M0.504883 108.505V0C60.4286 0 109.01 48.5811 109.01 108.505C109.01 168.429 60.4286 217.01 0.504883 217.01V108.505Z"
                                  fill="#75707B"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="50"
                                viewBox="0 0 93 50"
                                width="93"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M34.5285 1.95886H30.7845L30.5445 5.16286H30.6285C30.8365 4.88286 31.0685 4.66286 31.3245 4.50286C31.5805 4.33486 31.9325 4.25086 32.3805 4.25086C32.7485 4.25086 33.0845 4.31086 33.3885 4.43086C33.7005 4.54286 33.9685 4.71086 34.1925 4.93486C34.4165 5.15886 34.5925 5.43086 34.7205 5.75086C34.8485 6.06286 34.9125 6.42286 34.9125 6.83086C34.9125 7.23886 34.8485 7.61486 34.7205 7.95886C34.5925 8.29486 34.4045 8.58686 34.1565 8.83486C33.9085 9.07486 33.6085 9.26286 33.2565 9.39886C32.9045 9.53486 32.5045 9.60286 32.0565 9.60286C31.7045 9.60286 31.3885 9.56286 31.1085 9.48286C30.8365 9.40286 30.5925 9.29486 30.3765 9.15886C30.1685 9.02286 29.9845 8.87086 29.8245 8.70286C29.6645 8.53486 29.5205 8.35886 29.3925 8.17486L30.1485 7.59886C30.2605 7.76686 30.3725 7.91886 30.4845 8.05486C30.6045 8.19086 30.7405 8.31086 30.8925 8.41486C31.0445 8.51086 31.2165 8.58686 31.4085 8.64286C31.6005 8.69886 31.8245 8.72686 32.0805 8.72686C32.6565 8.72686 33.0965 8.57086 33.4005 8.25886C33.7125 7.94686 33.8685 7.51486 33.8685 6.96286V6.86686C33.8685 6.31486 33.7125 5.88286 33.4005 5.57086C33.0885 5.25886 32.6405 5.10286 32.0565 5.10286C31.6565 5.10286 31.3445 5.17086 31.1205 5.30686C30.9045 5.44286 30.7045 5.61086 30.5205 5.81086L29.6685 5.69086L29.9685 1.08286H34.5285V1.95886ZM39.3118 9.60286C38.7998 9.60286 38.3598 9.50686 37.9918 9.31486C37.6238 9.11486 37.3198 8.83086 37.0798 8.46286C36.8398 8.09486 36.6638 7.64286 36.5518 7.10686C36.4398 6.57086 36.3838 5.95886 36.3838 5.27086C36.3838 4.59086 36.4398 3.98286 36.5518 3.44686C36.6638 2.90286 36.8398 2.44686 37.0798 2.07886C37.3198 1.71086 37.6238 1.43086 37.9918 1.23886C38.3598 1.03886 38.7998 0.938862 39.3118 0.938862C39.8238 0.938862 40.2638 1.03886 40.6318 1.23886C40.9998 1.43086 41.3038 1.71086 41.5438 2.07886C41.7838 2.44686 41.9598 2.90286 42.0718 3.44686C42.1838 3.98286 42.2398 4.59086 42.2398 5.27086C42.2398 5.95886 42.1838 6.57086 42.0718 7.10686C41.9598 7.64286 41.7838 8.09486 41.5438 8.46286C41.3038 8.83086 40.9998 9.11486 40.6318 9.31486C40.2638 9.50686 39.8238 9.60286 39.3118 9.60286ZM39.3118 8.72686C39.6478 8.72686 39.9358 8.66286 40.1758 8.53486C40.4158 8.39886 40.6078 8.21086 40.7518 7.97086C40.9038 7.73086 41.0158 7.44286 41.0878 7.10686C41.1598 6.76286 41.1958 6.37886 41.1958 5.95486V4.58686C41.1958 4.17086 41.1598 3.79086 41.0878 3.44686C41.0158 3.10286 40.9038 2.81086 40.7518 2.57086C40.6078 2.33086 40.4158 2.14686 40.1758 2.01886C39.9358 1.88286 39.6478 1.81486 39.3118 1.81486C38.9758 1.81486 38.6878 1.88286 38.4478 2.01886C38.2078 2.14686 38.0118 2.33086 37.8598 2.57086C37.7158 2.81086 37.6078 3.10286 37.5358 3.44686C37.4638 3.79086 37.4278 4.17086 37.4278 4.58686V5.95486C37.4278 6.37886 37.4638 6.76286 37.5358 7.10686C37.6078 7.44286 37.7158 7.73086 37.8598 7.97086C38.0118 8.21086 38.2078 8.39886 38.4478 8.53486C38.6878 8.66286 38.9758 8.72686 39.3118 8.72686ZM39.3118 5.97886C39.0318 5.97886 38.8358 5.92286 38.7238 5.81086C38.6198 5.69886 38.5678 5.56286 38.5678 5.40286V5.13886C38.5678 4.97886 38.6198 4.84286 38.7238 4.73086C38.8358 4.61886 39.0318 4.56286 39.3118 4.56286C39.5918 4.56286 39.7838 4.61886 39.8878 4.73086C39.9998 4.84286 40.0558 4.97886 40.0558 5.13886V5.40286C40.0558 5.56286 39.9998 5.69886 39.8878 5.81086C39.7838 5.92286 39.5918 5.97886 39.3118 5.97886ZM43.9871 11.1149L48.1631 0.338862H49.0271L44.8511 11.1149H43.9871ZM56.1144 1.95886H52.3704L52.1304 5.16286H52.2144C52.4224 4.88286 52.6544 4.66286 52.9104 4.50286C53.1664 4.33486 53.5184 4.25086 53.9664 4.25086C54.3344 4.25086 54.6704 4.31086 54.9744 4.43086C55.2864 4.54286 55.5544 4.71086 55.7784 4.93486C56.0024 5.15886 56.1784 5.43086 56.3064 5.75086C56.4344 6.06286 56.4984 6.42286 56.4984 6.83086C56.4984 7.23886 56.4344 7.61486 56.3064 7.95886C56.1784 8.29486 55.9904 8.58686 55.7424 8.83486C55.4944 9.07486 55.1944 9.26286 54.8424 9.39886C54.4904 9.53486 54.0904 9.60286 53.6424 9.60286C53.2904 9.60286 52.9744 9.56286 52.6944 9.48286C52.4224 9.40286 52.1784 9.29486 51.9624 9.15886C51.7544 9.02286 51.5704 8.87086 51.4104 8.70286C51.2504 8.53486 51.1064 8.35886 50.9784 8.17486L51.7344 7.59886C51.8464 7.76686 51.9584 7.91886 52.0704 8.05486C52.1904 8.19086 52.3264 8.31086 52.4784 8.41486C52.6304 8.51086 52.8024 8.58686 52.9944 8.64286C53.1864 8.69886 53.4104 8.72686 53.6664 8.72686C54.2424 8.72686 54.6824 8.57086 54.9864 8.25886C55.2984 7.94686 55.4544 7.51486 55.4544 6.96286V6.86686C55.4544 6.31486 55.2984 5.88286 54.9864 5.57086C54.6744 5.25886 54.2264 5.10286 53.6424 5.10286C53.2424 5.10286 52.9304 5.17086 52.7064 5.30686C52.4904 5.44286 52.2904 5.61086 52.1064 5.81086L51.2544 5.69086L51.5544 1.08286H56.1144V1.95886ZM60.8977 9.60286C60.3857 9.60286 59.9457 9.50686 59.5777 9.31486C59.2097 9.11486 58.9057 8.83086 58.6657 8.46286C58.4257 8.09486 58.2497 7.64286 58.1377 7.10686C58.0257 6.57086 57.9697 5.95886 57.9697 5.27086C57.9697 4.59086 58.0257 3.98286 58.1377 3.44686C58.2497 2.90286 58.4257 2.44686 58.6657 2.07886C58.9057 1.71086 59.2097 1.43086 59.5777 1.23886C59.9457 1.03886 60.3857 0.938862 60.8977 0.938862C61.4097 0.938862 61.8497 1.03886 62.2177 1.23886C62.5857 1.43086 62.8897 1.71086 63.1297 2.07886C63.3697 2.44686 63.5457 2.90286 63.6577 3.44686C63.7697 3.98286 63.8257 4.59086 63.8257 5.27086C63.8257 5.95886 63.7697 6.57086 63.6577 7.10686C63.5457 7.64286 63.3697 8.09486 63.1297 8.46286C62.8897 8.83086 62.5857 9.11486 62.2177 9.31486C61.8497 9.50686 61.4097 9.60286 60.8977 9.60286ZM60.8977 8.72686C61.2337 8.72686 61.5217 8.66286 61.7617 8.53486C62.0017 8.39886 62.1937 8.21086 62.3377 7.97086C62.4897 7.73086 62.6017 7.44286 62.6737 7.10686C62.7457 6.76286 62.7817 6.37886 62.7817 5.95486V4.58686C62.7817 4.17086 62.7457 3.79086 62.6737 3.44686C62.6017 3.10286 62.4897 2.81086 62.3377 2.57086C62.1937 2.33086 62.0017 2.14686 61.7617 2.01886C61.5217 1.88286 61.2337 1.81486 60.8977 1.81486C60.5617 1.81486 60.2737 1.88286 60.0337 2.01886C59.7937 2.14686 59.5977 2.33086 59.4457 2.57086C59.3017 2.81086 59.1937 3.10286 59.1217 3.44686C59.0497 3.79086 59.0137 4.17086 59.0137 4.58686V5.95486C59.0137 6.37886 59.0497 6.76286 59.1217 7.10686C59.1937 7.44286 59.3017 7.73086 59.4457 7.97086C59.5977 8.21086 59.7937 8.39886 60.0337 8.53486C60.2737 8.66286 60.5617 8.72686 60.8977 8.72686ZM60.8977 5.97886C60.6177 5.97886 60.4217 5.92286 60.3097 5.81086C60.2057 5.69886 60.1537 5.56286 60.1537 5.40286V5.13886C60.1537 4.97886 60.2057 4.84286 60.3097 4.73086C60.4217 4.61886 60.6177 4.56286 60.8977 4.56286C61.1777 4.56286 61.3697 4.61886 61.4737 4.73086C61.5857 4.84286 61.6417 4.97886 61.6417 5.13886V5.40286C61.6417 5.56286 61.5857 5.69886 61.4737 5.81086C61.3697 5.92286 61.1777 5.97886 60.8977 5.97886ZM3.31124 29.6029C2.55924 29.6029 1.94324 29.4669 1.46324 29.1949C0.983245 28.9149 0.587245 28.5589 0.275245 28.1269L1.00724 27.5269C1.33524 27.9349 1.67924 28.2389 2.03924 28.4389C2.40724 28.6389 2.84324 28.7389 3.34725 28.7389C3.95524 28.7389 4.41924 28.5989 4.73925 28.3189C5.05924 28.0389 5.21924 27.6469 5.21924 27.1429C5.21924 26.7349 5.10325 26.4189 4.87125 26.1949C4.63925 25.9629 4.23524 25.7989 3.65925 25.7029L2.72324 25.5469C2.31524 25.4749 1.97124 25.3669 1.69124 25.2229C1.41924 25.0789 1.19924 24.9069 1.03124 24.7069C0.863245 24.4989 0.743245 24.2749 0.671245 24.0349C0.599245 23.7869 0.563245 23.5309 0.563245 23.2669C0.563245 22.4989 0.815245 21.9189 1.31924 21.5269C1.82324 21.1349 2.50324 20.9389 3.35924 20.9389C4.03124 20.9389 4.59524 21.0509 5.05124 21.2749C5.51525 21.4989 5.88725 21.8149 6.16724 22.2229L5.45925 22.8349C5.22724 22.5309 4.94724 22.2829 4.61924 22.0909C4.29124 21.8989 3.86725 21.8029 3.34725 21.8029C2.77924 21.8029 2.34324 21.9229 2.03924 22.1629C1.73524 22.4029 1.58324 22.7629 1.58324 23.2429C1.58324 23.6189 1.69524 23.9269 1.91924 24.1669C2.15124 24.3989 2.56324 24.5669 3.15525 24.6709L4.05524 24.8269C4.46324 24.8989 4.80724 25.0069 5.08724 25.1509C5.36725 25.2949 5.59125 25.4669 5.75925 25.6669C5.93525 25.8669 6.05925 26.0909 6.13125 26.3389C6.20325 26.5869 6.23925 26.8469 6.23925 27.1189C6.23925 27.8949 5.98325 28.5029 5.47124 28.9429C4.96724 29.3829 4.24724 29.6029 3.31124 29.6029ZM8.07056 23.2669H9.03056V24.2749H9.07856C9.47856 23.5069 10.1146 23.1229 10.9866 23.1229C11.7466 23.1229 12.3386 23.4069 12.7626 23.9749C13.1946 24.5429 13.4106 25.3389 13.4106 26.3629C13.4106 27.3869 13.1946 28.1829 12.7626 28.7509C12.3386 29.3189 11.7466 29.6029 10.9866 29.6029C10.1146 29.6029 9.47856 29.2189 9.07856 28.4509H9.03056V31.8589H8.07056V23.2669ZM10.6146 28.7509C11.1746 28.7509 11.6066 28.5829 11.9106 28.2469C12.2226 27.9029 12.3786 27.4509 12.3786 26.8909V25.8349C12.3786 25.2749 12.2226 24.8269 11.9106 24.4909C11.6066 24.1469 11.1746 23.9749 10.6146 23.9749C10.3986 23.9749 10.1946 24.0029 10.0026 24.0589C9.81056 24.1149 9.64256 24.1989 9.49856 24.3109C9.35456 24.4149 9.23856 24.5469 9.15056 24.7069C9.07056 24.8589 9.03056 25.0389 9.03056 25.2469V27.4789C9.03056 27.6869 9.07056 27.8709 9.15056 28.0309C9.23856 28.1829 9.35456 28.3149 9.49856 28.4269C9.64256 28.5309 9.81056 28.6109 10.0026 28.6669C10.1946 28.7229 10.3986 28.7509 10.6146 28.7509ZM15.0859 28.6429H17.2459V21.3949H15.0859V20.5789H18.2059V28.6429H20.3659V29.4589H15.0859V28.6429ZM25.3052 21.8989C25.0252 21.8989 24.8292 21.8429 24.7172 21.7309C24.6052 21.6109 24.5492 21.4629 24.5492 21.2869V21.0949C24.5492 20.9189 24.6052 20.7749 24.7172 20.6629C24.8292 20.5429 25.0252 20.4829 25.3052 20.4829C25.5852 20.4829 25.7812 20.5429 25.8932 20.6629C26.0052 20.7749 26.0612 20.9189 26.0612 21.0949V21.2869C26.0612 21.4629 26.0052 21.6109 25.8932 21.7309C25.7812 21.8429 25.5852 21.8989 25.3052 21.8989ZM22.5932 28.6429H24.8252V24.0829H22.5932V23.2669H25.7852V28.6429H27.8732V29.4589H22.5932V28.6429ZM32.4165 29.4589C31.9445 29.4589 31.5965 29.3269 31.3725 29.0629C31.1565 28.7989 31.0485 28.4589 31.0485 28.0429V24.0829H28.9845V23.2669H30.5205C30.7285 23.2669 30.8725 23.2269 30.9525 23.1469C31.0405 23.0589 31.0845 22.9109 31.0845 22.7029V21.0829H32.0085V23.2669H34.8285V24.0829H32.0085V28.6429H34.8285V29.4589H32.4165ZM44.0471 20.5789H45.0071V24.2749H45.0551C45.4551 23.5069 46.0911 23.1229 46.9631 23.1229C47.7231 23.1229 48.3151 23.4069 48.7391 23.9749C49.1711 24.5429 49.3871 25.3389 49.3871 26.3629C49.3871 27.3869 49.1711 28.1829 48.7391 28.7509C48.3151 29.3189 47.7231 29.6029 46.9631 29.6029C46.0911 29.6029 45.4551 29.2189 45.0551 28.4509H45.0071V29.4589H44.0471V20.5789ZM46.5911 28.7509C47.1511 28.7509 47.5831 28.5829 47.8871 28.2469C48.1991 27.9029 48.3551 27.4509 48.3551 26.8909V25.8349C48.3551 25.2749 48.1991 24.8269 47.8871 24.4909C47.5831 24.1469 47.1511 23.9749 46.5911 23.9749C46.3751 23.9749 46.1711 24.0029 45.9791 24.0589C45.7871 24.1149 45.6191 24.1989 45.4751 24.3109C45.3311 24.4149 45.2151 24.5469 45.1271 24.7069C45.0471 24.8589 45.0071 25.0389 45.0071 25.2469V27.4789C45.0071 27.6869 45.0471 27.8709 45.1271 28.0309C45.2151 28.1829 45.3311 28.3149 45.4751 28.4269C45.6191 28.5309 45.7871 28.6109 45.9791 28.6669C46.1711 28.7229 46.3751 28.7509 46.5911 28.7509ZM53.8104 29.6029C53.3624 29.6029 52.9584 29.5269 52.5984 29.3749C52.2464 29.2229 51.9424 29.0069 51.6864 28.7269C51.4384 28.4389 51.2464 28.0989 51.1104 27.7069C50.9744 27.3069 50.9064 26.8629 50.9064 26.3749C50.9064 25.8789 50.9744 25.4309 51.1104 25.0309C51.2544 24.6309 51.4504 24.2909 51.6984 24.0109C51.9464 23.7229 52.2424 23.5029 52.5864 23.3509C52.9384 23.1989 53.3264 23.1229 53.7504 23.1229C54.1664 23.1229 54.5424 23.1989 54.8784 23.3509C55.2224 23.5029 55.5144 23.7149 55.7544 23.9869C55.9944 24.2509 56.1784 24.5669 56.3064 24.9349C56.4344 25.3029 56.4984 25.7069 56.4984 26.1469V26.6029H51.9144V26.8909C51.9144 27.1629 51.9584 27.4149 52.0464 27.6469C52.1344 27.8789 52.2584 28.0789 52.4184 28.2469C52.5864 28.4149 52.7864 28.5469 53.0184 28.6429C53.2584 28.7309 53.5224 28.7749 53.8104 28.7749C54.2264 28.7749 54.5864 28.6789 54.8904 28.4869C55.1944 28.2949 55.4264 28.0309 55.5864 27.6949L56.2944 28.1749C56.1104 28.5909 55.8024 28.9349 55.3704 29.2069C54.9464 29.4709 54.4264 29.6029 53.8104 29.6029ZM53.7504 23.9149C53.4864 23.9149 53.2424 23.9629 53.0184 24.0589C52.7944 24.1549 52.5984 24.2869 52.4304 24.4549C52.2704 24.6229 52.1424 24.8229 52.0464 25.0549C51.9584 25.2789 51.9144 25.5269 51.9144 25.7989V25.8829H55.4664V25.7509C55.4664 25.4789 55.4224 25.2309 55.3344 25.0069C55.2544 24.7829 55.1384 24.5909 54.9864 24.4309C54.8424 24.2629 54.6624 24.1349 54.4464 24.0469C54.2384 23.9589 54.0064 23.9149 53.7504 23.9149ZM61.1977 29.4589C60.7257 29.4589 60.3777 29.3269 60.1537 29.0629C59.9377 28.7989 59.8297 28.4589 59.8297 28.0429V24.0829H57.7657V23.2669H59.3017C59.5097 23.2669 59.6537 23.2269 59.7337 23.1469C59.8217 23.0589 59.8657 22.9109 59.8657 22.7029V21.0829H60.7897V23.2669H63.6097V24.0829H60.7897V28.6429H63.6097V29.4589H61.1977ZM64.8531 23.2669H65.7051L66.4131 28.6189H66.5211L67.5771 23.2669H68.6331L69.6891 28.6189H69.7971L70.5051 23.2669H71.3331L70.3851 29.4589H69.1371L68.1531 24.2749H68.0571L67.0491 29.4589H65.8011L64.8531 23.2669ZM75.3964 29.6029C74.9484 29.6029 74.5444 29.5269 74.1844 29.3749C73.8324 29.2229 73.5284 29.0069 73.2724 28.7269C73.0244 28.4389 72.8324 28.0989 72.6964 27.7069C72.5604 27.3069 72.4924 26.8629 72.4924 26.3749C72.4924 25.8789 72.5604 25.4309 72.6964 25.0309C72.8404 24.6309 73.0364 24.2909 73.2844 24.0109C73.5324 23.7229 73.8284 23.5029 74.1724 23.3509C74.5244 23.1989 74.9124 23.1229 75.3364 23.1229C75.7524 23.1229 76.1284 23.1989 76.4644 23.3509C76.8084 23.5029 77.1004 23.7149 77.3404 23.9869C77.5804 24.2509 77.7644 24.5669 77.8924 24.9349C78.0204 25.3029 78.0844 25.7069 78.0844 26.1469V26.6029H73.5004V26.8909C73.5004 27.1629 73.5444 27.4149 73.6324 27.6469C73.7204 27.8789 73.8444 28.0789 74.0044 28.2469C74.1724 28.4149 74.3724 28.5469 74.6044 28.6429C74.8444 28.7309 75.1084 28.7749 75.3964 28.7749C75.8124 28.7749 76.1724 28.6789 76.4764 28.4869C76.7804 28.2949 77.0124 28.0309 77.1724 27.6949L77.8804 28.1749C77.6964 28.5909 77.3884 28.9349 76.9564 29.2069C76.5324 29.4709 76.0124 29.6029 75.3964 29.6029ZM75.3364 23.9149C75.0724 23.9149 74.8284 23.9629 74.6044 24.0589C74.3804 24.1549 74.1844 24.2869 74.0164 24.4549C73.8564 24.6229 73.7284 24.8229 73.6324 25.0549C73.5444 25.2789 73.5004 25.5269 73.5004 25.7989V25.8829H77.0524V25.7509C77.0524 25.4789 77.0084 25.2309 76.9204 25.0069C76.8404 24.7829 76.7244 24.5909 76.5724 24.4309C76.4284 24.2629 76.2484 24.1349 76.0324 24.0469C75.8244 23.9589 75.5924 23.9149 75.3364 23.9149ZM82.5917 29.6029C82.1437 29.6029 81.7397 29.5269 81.3797 29.3749C81.0277 29.2229 80.7237 29.0069 80.4677 28.7269C80.2197 28.4389 80.0277 28.0989 79.8917 27.7069C79.7557 27.3069 79.6877 26.8629 79.6877 26.3749C79.6877 25.8789 79.7557 25.4309 79.8917 25.0309C80.0357 24.6309 80.2317 24.2909 80.4797 24.0109C80.7277 23.7229 81.0237 23.5029 81.3677 23.3509C81.7197 23.1989 82.1077 23.1229 82.5317 23.1229C82.9477 23.1229 83.3237 23.1989 83.6597 23.3509C84.0037 23.5029 84.2957 23.7149 84.5357 23.9869C84.7757 24.2509 84.9597 24.5669 85.0877 24.9349C85.2157 25.3029 85.2797 25.7069 85.2797 26.1469V26.6029H80.6957V26.8909C80.6957 27.1629 80.7397 27.4149 80.8277 27.6469C80.9157 27.8789 81.0397 28.0789 81.1997 28.2469C81.3677 28.4149 81.5677 28.5469 81.7997 28.6429C82.0397 28.7309 82.3037 28.7749 82.5917 28.7749C83.0077 28.7749 83.3677 28.6789 83.6717 28.4869C83.9757 28.2949 84.2077 28.0309 84.3677 27.6949L85.0757 28.1749C84.8917 28.5909 84.5837 28.9349 84.1517 29.2069C83.7277 29.4709 83.2077 29.6029 82.5917 29.6029ZM82.5317 23.9149C82.2677 23.9149 82.0237 23.9629 81.7997 24.0589C81.5757 24.1549 81.3797 24.2869 81.2117 24.4549C81.0517 24.6229 80.9237 24.8229 80.8277 25.0549C80.7397 25.2789 80.6957 25.5269 80.6957 25.7989V25.8829H84.2477V25.7509C84.2477 25.4789 84.2037 25.2309 84.1157 25.0069C84.0357 24.7829 83.9197 24.5909 83.7677 24.4309C83.6237 24.2629 83.4437 24.1349 83.2277 24.0469C83.0197 23.9589 82.7877 23.9149 82.5317 23.9149ZM87.255 29.4589V23.2669H88.215V24.2749H88.263C88.327 24.1229 88.407 23.9789 88.503 23.8429C88.599 23.6989 88.715 23.5749 88.851 23.4709C88.995 23.3669 89.163 23.2829 89.355 23.2189C89.547 23.1549 89.771 23.1229 90.027 23.1229C90.675 23.1229 91.195 23.3309 91.587 23.7469C91.979 24.1549 92.175 24.7349 92.175 25.4869V29.4589H91.215V25.6549C91.215 25.0869 91.091 24.6669 90.843 24.3949C90.595 24.1149 90.231 23.9749 89.751 23.9749C89.559 23.9749 89.371 23.9989 89.187 24.0469C89.003 24.0949 88.839 24.1669 88.695 24.2629C88.551 24.3589 88.435 24.4829 88.347 24.6349C88.259 24.7869 88.215 24.9629 88.215 25.1629V29.4589H87.255ZM27.2612 49.4589C26.8852 49.4589 26.6172 49.3629 26.4572 49.1709C26.2972 48.9789 26.1972 48.7389 26.1572 48.4509H26.0972C25.9612 48.8109 25.7412 49.0949 25.4372 49.3029C25.1412 49.5029 24.7412 49.6029 24.2372 49.6029C23.5892 49.6029 23.0732 49.4349 22.6892 49.0989C22.3052 48.7629 22.1132 48.3029 22.1132 47.7189C22.1132 47.1429 22.3212 46.6989 22.7372 46.3869C23.1612 46.0749 23.8412 45.9189 24.7772 45.9189H26.0972V45.3069C26.0972 44.8509 25.9692 44.5109 25.7132 44.2869C25.4572 44.0549 25.0932 43.9389 24.6212 43.9389C24.2052 43.9389 23.8652 44.0229 23.6012 44.1909C23.3372 44.3509 23.1252 44.5709 22.9652 44.8509L22.3172 44.3709C22.3972 44.2109 22.5052 44.0549 22.6412 43.9029C22.7772 43.7509 22.9452 43.6189 23.1452 43.5069C23.3452 43.3869 23.5732 43.2949 23.8292 43.2309C24.0852 43.1589 24.3692 43.1229 24.6812 43.1229C25.4092 43.1229 25.9852 43.3069 26.4092 43.6749C26.8412 44.0429 27.0572 44.5549 27.0572 45.2109V48.6189H27.9212V49.4589H27.2612ZM24.4052 48.7989C24.6532 48.7989 24.8772 48.7709 25.0772 48.7149C25.2852 48.6509 25.4652 48.5709 25.6172 48.4749C25.7692 48.3709 25.8852 48.2509 25.9652 48.1149C26.0532 47.9709 26.0972 47.8189 26.0972 47.6589V46.6389H24.7772C24.2012 46.6389 23.7812 46.7189 23.5172 46.8789C23.2532 47.0389 23.1212 47.2709 23.1212 47.5749V47.8269C23.1212 48.1469 23.2332 48.3909 23.4572 48.5589C23.6892 48.7189 24.0052 48.7989 24.4052 48.7989ZM29.4405 48.6429H31.2525V44.0829H29.4405V43.2669H32.2125V44.8269H32.2725C32.4005 44.3389 32.6405 43.9589 32.9925 43.6869C33.3525 43.4069 33.8085 43.2669 34.3605 43.2669H35.2245V44.2269H34.0605C33.5085 44.2269 33.0605 44.3869 32.7165 44.7069C32.3805 45.0269 32.2125 45.4469 32.2125 45.9669V48.6429H34.6125V49.4589H29.4405V48.6429ZM39.6118 49.4589C39.1398 49.4589 38.7918 49.3269 38.5678 49.0629C38.3518 48.7989 38.2438 48.4589 38.2438 48.0429V44.0829H36.1798V43.2669H37.7158C37.9238 43.2669 38.0678 43.2269 38.1478 43.1469C38.2358 43.0589 38.2798 42.9109 38.2798 42.7029V41.0829H39.2038V43.2669H42.0238V44.0829H39.2038V48.6429H42.0238V49.4589H39.6118ZM46.8911 41.8989C46.6111 41.8989 46.4151 41.8429 46.3031 41.7309C46.1911 41.6109 46.1351 41.4629 46.1351 41.2869V41.0949C46.1351 40.9189 46.1911 40.7749 46.3031 40.6629C46.4151 40.5429 46.6111 40.4829 46.8911 40.4829C47.1711 40.4829 47.3671 40.5429 47.4791 40.6629C47.5911 40.7749 47.6471 40.9189 47.6471 41.0949V41.2869C47.6471 41.4629 47.5911 41.6109 47.4791 41.7309C47.3671 41.8429 47.1711 41.8989 46.8911 41.8989ZM44.1791 48.6429H46.4111V44.0829H44.1791V43.2669H47.3711V48.6429H49.4591V49.4589H44.1791V48.6429ZM53.7744 49.6029C53.1264 49.6029 52.5664 49.4949 52.0944 49.2789C51.6304 49.0549 51.2344 48.7589 50.9064 48.3909L51.5544 47.8269C51.8504 48.1389 52.1744 48.3789 52.5264 48.5469C52.8784 48.7149 53.3024 48.7989 53.7984 48.7989C54.2784 48.7989 54.6704 48.7149 54.9744 48.5469C55.2864 48.3709 55.4424 48.0989 55.4424 47.7309C55.4424 47.5709 55.4104 47.4389 55.3464 47.3349C55.2904 47.2229 55.2104 47.1349 55.1064 47.0709C55.0024 47.0069 54.8864 46.9589 54.7584 46.9269C54.6304 46.8869 54.4944 46.8549 54.3504 46.8309L53.3784 46.6869C53.1624 46.6549 52.9264 46.6109 52.6704 46.5549C52.4224 46.4989 52.1944 46.4109 51.9864 46.2909C51.7784 46.1629 51.6024 45.9949 51.4584 45.7869C51.3224 45.5789 51.2544 45.3069 51.2544 44.9709C51.2544 44.6589 51.3144 44.3909 51.4344 44.1669C51.5624 43.9349 51.7384 43.7429 51.9624 43.5909C52.1864 43.4309 52.4504 43.3149 52.7544 43.2429C53.0584 43.1629 53.3904 43.1229 53.7504 43.1229C54.3104 43.1229 54.7944 43.2109 55.2024 43.3869C55.6184 43.5629 55.9744 43.8069 56.2704 44.1189L55.6464 44.7069C55.5744 44.6189 55.4824 44.5309 55.3704 44.4429C55.2664 44.3469 55.1344 44.2629 54.9744 44.1909C54.8224 44.1109 54.6424 44.0469 54.4344 43.9989C54.2264 43.9509 53.9864 43.9269 53.7144 43.9269C53.2264 43.9269 52.8504 44.0109 52.5864 44.1789C52.3304 44.3469 52.2024 44.5909 52.2024 44.9109C52.2024 45.0709 52.2304 45.2069 52.2864 45.3189C52.3504 45.4229 52.4344 45.5069 52.5384 45.5709C52.6424 45.6349 52.7584 45.6869 52.8864 45.7269C53.0224 45.7589 53.1584 45.7869 53.2944 45.8109L54.2664 45.9549C54.4904 45.9869 54.7264 46.0309 54.9744 46.0869C55.2224 46.1429 55.4504 46.2349 55.6584 46.3629C55.8664 46.4829 56.0384 46.6469 56.1744 46.8549C56.3184 47.0629 56.3904 47.3349 56.3904 47.6709C56.3904 48.2869 56.1504 48.7629 55.6704 49.0989C55.1984 49.4349 54.5664 49.6029 53.7744 49.6029ZM61.1977 49.4589C60.7257 49.4589 60.3777 49.3269 60.1537 49.0629C59.9377 48.7989 59.8297 48.4589 59.8297 48.0429V44.0829H57.7657V43.2669H59.3017C59.5097 43.2669 59.6537 43.2269 59.7337 43.1469C59.8217 43.0589 59.8657 42.9109 59.8657 42.7029V41.0829H60.7897V43.2669H63.6097V44.0829H60.7897V48.6429H63.6097V49.4589H61.1977ZM68.1651 49.6029C67.5171 49.6029 66.9571 49.4949 66.4851 49.2789C66.0211 49.0549 65.6251 48.7589 65.2971 48.3909L65.9451 47.8269C66.2411 48.1389 66.5651 48.3789 66.9171 48.5469C67.2691 48.7149 67.6931 48.7989 68.1891 48.7989C68.6691 48.7989 69.0611 48.7149 69.3651 48.5469C69.6771 48.3709 69.8331 48.0989 69.8331 47.7309C69.8331 47.5709 69.8011 47.4389 69.7371 47.3349C69.6811 47.2229 69.6011 47.1349 69.4971 47.0709C69.3931 47.0069 69.2771 46.9589 69.1491 46.9269C69.0211 46.8869 68.8851 46.8549 68.7411 46.8309L67.7691 46.6869C67.5531 46.6549 67.3171 46.6109 67.0611 46.5549C66.8131 46.4989 66.5851 46.4109 66.3771 46.2909C66.1691 46.1629 65.9931 45.9949 65.8491 45.7869C65.7131 45.5789 65.6451 45.3069 65.6451 44.9709C65.6451 44.6589 65.7051 44.3909 65.8251 44.1669C65.9531 43.9349 66.1291 43.7429 66.3531 43.5909C66.5771 43.4309 66.8411 43.3149 67.1451 43.2429C67.4491 43.1629 67.7811 43.1229 68.1411 43.1229C68.7011 43.1229 69.1851 43.2109 69.5931 43.3869C70.0091 43.5629 70.3651 43.8069 70.6611 44.1189L70.0371 44.7069C69.9651 44.6189 69.8731 44.5309 69.7611 44.4429C69.6571 44.3469 69.5251 44.2629 69.3651 44.1909C69.2131 44.1109 69.0331 44.0469 68.8251 43.9989C68.6171 43.9509 68.3771 43.9269 68.1051 43.9269C67.6171 43.9269 67.2411 44.0109 66.9771 44.1789C66.7211 44.3469 66.5931 44.5909 66.5931 44.9109C66.5931 45.0709 66.6211 45.2069 66.6771 45.3189C66.7411 45.4229 66.8251 45.5069 66.9291 45.5709C67.0331 45.6349 67.1491 45.6869 67.2771 45.7269C67.4131 45.7589 67.5491 45.7869 67.6851 45.8109L68.6571 45.9549C68.8811 45.9869 69.1171 46.0309 69.3651 46.0869C69.6131 46.1429 69.8411 46.2349 70.0491 46.3629C70.2571 46.4829 70.4291 46.6469 70.5651 46.8549C70.7091 47.0629 70.7811 47.3349 70.7811 47.6709C70.7811 48.2869 70.5411 48.7629 70.0611 49.0989C69.5891 49.4349 68.9571 49.6029 68.1651 49.6029Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col-lg-4 col-12">
                            <p
                              class="add-content-title add-content-title-height text-center"
                            >
                              PRODUCER ONLY
                            </p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                style="position: relative;"
                                viewBox="0 0 217 217"
                                width="217"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M108.505 108.505V0C168.429 0 217.01 48.5811 217.01 108.505C217.01 168.429 168.429 217.01 108.505 217.01C48.5811 217.01 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="50"
                                viewBox="0 0 57 50"
                                width="57"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.1346 9.5V8.624H17.5346V1.868H17.4506L15.3386 3.836L14.7506 3.2L16.9706 1.124H18.5426V8.624H20.7506V9.5H15.1346ZM24.91 9.644C24.398 9.644 23.958 9.548 23.59 9.356C23.222 9.156 22.918 8.872 22.678 8.504C22.438 8.136 22.262 7.684 22.15 7.148C22.038 6.612 21.982 6 21.982 5.312C21.982 4.632 22.038 4.024 22.15 3.488C22.262 2.944 22.438 2.488 22.678 2.12C22.918 1.752 23.222 1.472 23.59 1.28C23.958 1.08 24.398 0.98 24.91 0.98C25.422 0.98 25.862 1.08 26.23 1.28C26.598 1.472 26.902 1.752 27.142 2.12C27.382 2.488 27.558 2.944 27.67 3.488C27.782 4.024 27.838 4.632 27.838 5.312C27.838 6 27.782 6.612 27.67 7.148C27.558 7.684 27.382 8.136 27.142 8.504C26.902 8.872 26.598 9.156 26.23 9.356C25.862 9.548 25.422 9.644 24.91 9.644ZM24.91 8.768C25.246 8.768 25.534 8.704 25.774 8.576C26.014 8.44 26.206 8.252 26.35 8.012C26.502 7.772 26.614 7.484 26.686 7.148C26.758 6.804 26.794 6.42 26.794 5.996V4.628C26.794 4.212 26.758 3.832 26.686 3.488C26.614 3.144 26.502 2.852 26.35 2.612C26.206 2.372 26.014 2.188 25.774 2.06C25.534 1.924 25.246 1.856 24.91 1.856C24.574 1.856 24.286 1.924 24.046 2.06C23.806 2.188 23.61 2.372 23.458 2.612C23.314 2.852 23.206 3.144 23.134 3.488C23.062 3.832 23.026 4.212 23.026 4.628V5.996C23.026 6.42 23.062 6.804 23.134 7.148C23.206 7.484 23.314 7.772 23.458 8.012C23.61 8.252 23.806 8.44 24.046 8.576C24.286 8.704 24.574 8.768 24.91 8.768ZM24.91 6.02C24.63 6.02 24.434 5.964 24.322 5.852C24.218 5.74 24.166 5.604 24.166 5.444V5.18C24.166 5.02 24.218 4.884 24.322 4.772C24.434 4.66 24.63 4.604 24.91 4.604C25.19 4.604 25.382 4.66 25.486 4.772C25.598 4.884 25.654 5.02 25.654 5.18V5.444C25.654 5.604 25.598 5.74 25.486 5.852C25.382 5.964 25.19 6.02 24.91 6.02ZM32.1053 9.644C31.5933 9.644 31.1533 9.548 30.7853 9.356C30.4173 9.156 30.1133 8.872 29.8733 8.504C29.6333 8.136 29.4573 7.684 29.3453 7.148C29.2333 6.612 29.1773 6 29.1773 5.312C29.1773 4.632 29.2333 4.024 29.3453 3.488C29.4573 2.944 29.6333 2.488 29.8733 2.12C30.1133 1.752 30.4173 1.472 30.7853 1.28C31.1533 1.08 31.5933 0.98 32.1053 0.98C32.6173 0.98 33.0573 1.08 33.4253 1.28C33.7933 1.472 34.0973 1.752 34.3373 2.12C34.5773 2.488 34.7533 2.944 34.8653 3.488C34.9773 4.024 35.0333 4.632 35.0333 5.312C35.0333 6 34.9773 6.612 34.8653 7.148C34.7533 7.684 34.5773 8.136 34.3373 8.504C34.0973 8.872 33.7933 9.156 33.4253 9.356C33.0573 9.548 32.6173 9.644 32.1053 9.644ZM32.1053 8.768C32.4413 8.768 32.7293 8.704 32.9693 8.576C33.2093 8.44 33.4013 8.252 33.5453 8.012C33.6973 7.772 33.8093 7.484 33.8813 7.148C33.9533 6.804 33.9893 6.42 33.9893 5.996V4.628C33.9893 4.212 33.9533 3.832 33.8813 3.488C33.8093 3.144 33.6973 2.852 33.5453 2.612C33.4013 2.372 33.2093 2.188 32.9693 2.06C32.7293 1.924 32.4413 1.856 32.1053 1.856C31.7693 1.856 31.4813 1.924 31.2413 2.06C31.0013 2.188 30.8053 2.372 30.6533 2.612C30.5093 2.852 30.4013 3.144 30.3293 3.488C30.2573 3.832 30.2213 4.212 30.2213 4.628V5.996C30.2213 6.42 30.2573 6.804 30.3293 7.148C30.4013 7.484 30.5093 7.772 30.6533 8.012C30.8053 8.252 31.0013 8.44 31.2413 8.576C31.4813 8.704 31.7693 8.768 32.1053 8.768ZM32.1053 6.02C31.8253 6.02 31.6293 5.964 31.5173 5.852C31.4133 5.74 31.3613 5.604 31.3613 5.444V5.18C31.3613 5.02 31.4133 4.884 31.5173 4.772C31.6293 4.66 31.8253 4.604 32.1053 4.604C32.3853 4.604 32.5773 4.66 32.6813 4.772C32.7933 4.884 32.8493 5.02 32.8493 5.18V5.444C32.8493 5.604 32.7933 5.74 32.6813 5.852C32.5773 5.964 32.3853 6.02 32.1053 6.02ZM37.7286 5.228C37.2006 5.228 36.7686 5.052 36.4326 4.7C36.1046 4.34 35.9406 3.808 35.9406 3.104C35.9406 2.4 36.1046 1.872 36.4326 1.52C36.7686 1.16 37.2006 0.98 37.7286 0.98C38.2566 0.98 38.6846 1.16 39.0126 1.52C39.3486 1.872 39.5166 2.4 39.5166 3.104C39.5166 3.808 39.3486 4.34 39.0126 4.7C38.6846 5.052 38.2566 5.228 37.7286 5.228ZM37.7286 4.58C38.0166 4.58 38.2486 4.48 38.4246 4.28C38.6086 4.08 38.7006 3.788 38.7006 3.404V2.804C38.7006 2.42 38.6086 2.128 38.4246 1.928C38.2486 1.728 38.0166 1.628 37.7286 1.628C37.4406 1.628 37.2046 1.728 37.0206 1.928C36.8446 2.128 36.7566 2.42 36.7566 2.804V3.404C36.7566 3.788 36.8446 4.08 37.0206 4.28C37.2046 4.48 37.4406 4.58 37.7286 4.58ZM41.8206 1.124H42.6846L40.7646 4.724H39.9006L41.8206 1.124ZM37.8366 5.9H38.7006L36.7806 9.5H35.9166L37.8366 5.9ZM40.8726 9.644C40.3446 9.644 39.9126 9.468 39.5766 9.116C39.2486 8.756 39.0846 8.224 39.0846 7.52C39.0846 6.816 39.2486 6.288 39.5766 5.936C39.9126 5.576 40.3446 5.396 40.8726 5.396C41.4006 5.396 41.8286 5.576 42.1566 5.936C42.4926 6.288 42.6606 6.816 42.6606 7.52C42.6606 8.224 42.4926 8.756 42.1566 9.116C41.8286 9.468 41.4006 9.644 40.8726 9.644ZM40.8726 8.996C41.1606 8.996 41.3926 8.896 41.5686 8.696C41.7526 8.496 41.8446 8.204 41.8446 7.82V7.22C41.8446 6.836 41.7526 6.544 41.5686 6.344C41.3926 6.144 41.1606 6.044 40.8726 6.044C40.5846 6.044 40.3486 6.144 40.1646 6.344C39.9886 6.544 39.9006 6.836 39.9006 7.22V7.82C39.9006 8.204 39.9886 8.496 40.1646 8.696C40.3486 8.896 40.5846 8.996 40.8726 8.996ZM10.8193 29.5C10.3473 29.5 9.99933 29.368 9.77533 29.104C9.55933 28.84 9.45133 28.5 9.45133 28.084V24.124H7.38733V23.308H8.92333C9.13133 23.308 9.27533 23.268 9.35533 23.188C9.44333 23.1 9.48733 22.952 9.48733 22.744V21.124H10.4113V23.308H13.2313V24.124H10.4113V28.684H13.2313V29.5H10.8193ZM17.7146 29.644C17.2826 29.644 16.8906 29.568 16.5386 29.416C16.1946 29.264 15.8986 29.048 15.6506 28.768C15.4106 28.48 15.2266 28.14 15.0986 27.748C14.9706 27.348 14.9066 26.9 14.9066 26.404C14.9066 25.916 14.9706 25.472 15.0986 25.072C15.2266 24.672 15.4106 24.332 15.6506 24.052C15.8986 23.764 16.1946 23.544 16.5386 23.392C16.8906 23.24 17.2826 23.164 17.7146 23.164C18.1466 23.164 18.5346 23.24 18.8786 23.392C19.2306 23.544 19.5266 23.764 19.7666 24.052C20.0146 24.332 20.2026 24.672 20.3306 25.072C20.4586 25.472 20.5226 25.916 20.5226 26.404C20.5226 26.9 20.4586 27.348 20.3306 27.748C20.2026 28.14 20.0146 28.48 19.7666 28.768C19.5266 29.048 19.2306 29.264 18.8786 29.416C18.5346 29.568 18.1466 29.644 17.7146 29.644ZM17.7146 28.816C18.2506 28.816 18.6826 28.656 19.0106 28.336C19.3386 28.016 19.5026 27.52 19.5026 26.848V25.96C19.5026 25.288 19.3386 24.792 19.0106 24.472C18.6826 24.152 18.2506 23.992 17.7146 23.992C17.1786 23.992 16.7466 24.152 16.4186 24.472C16.0906 24.792 15.9266 25.288 15.9266 25.96V26.848C15.9266 27.52 16.0906 28.016 16.4186 28.336C16.7466 28.656 17.1786 28.816 17.7146 28.816ZM32.4053 29.5C31.9333 29.5 31.5853 29.368 31.3613 29.104C31.1453 28.84 31.0373 28.5 31.0373 28.084V24.124H28.9733V23.308H30.5093C30.7173 23.308 30.8613 23.268 30.9413 23.188C31.0293 23.1 31.0733 22.952 31.0733 22.744V21.124H31.9973V23.308H34.8173V24.124H31.9973V28.684H34.8173V29.5H32.4053ZM36.8766 20.62H37.8366V24.316H37.8846C37.9486 24.164 38.0286 24.02 38.1246 23.884C38.2206 23.74 38.3366 23.616 38.4726 23.512C38.6166 23.408 38.7846 23.324 38.9766 23.26C39.1686 23.196 39.3926 23.164 39.6486 23.164C40.2966 23.164 40.8166 23.372 41.2086 23.788C41.6006 24.196 41.7966 24.776 41.7966 25.528V29.5H40.8366V25.696C40.8366 25.128 40.7126 24.708 40.4646 24.436C40.2166 24.156 39.8526 24.016 39.3726 24.016C39.1806 24.016 38.9926 24.04 38.8086 24.088C38.6246 24.136 38.4606 24.208 38.3166 24.304C38.1726 24.4 38.0566 24.524 37.9686 24.676C37.8806 24.828 37.8366 25.004 37.8366 25.204V29.5H36.8766V20.62ZM46.6039 29.644C46.1559 29.644 45.7519 29.568 45.3919 29.416C45.0399 29.264 44.7359 29.048 44.4799 28.768C44.2319 28.48 44.0399 28.14 43.9039 27.748C43.7679 27.348 43.6999 26.904 43.6999 26.416C43.6999 25.92 43.7679 25.472 43.9039 25.072C44.0479 24.672 44.2439 24.332 44.4919 24.052C44.7399 23.764 45.0359 23.544 45.3799 23.392C45.7319 23.24 46.1199 23.164 46.5439 23.164C46.9599 23.164 47.3359 23.24 47.6719 23.392C48.0159 23.544 48.3079 23.756 48.5479 24.028C48.7879 24.292 48.9719 24.608 49.0999 24.976C49.2279 25.344 49.2919 25.748 49.2919 26.188V26.644H44.7079V26.932C44.7079 27.204 44.7519 27.456 44.8399 27.688C44.9279 27.92 45.0519 28.12 45.2119 28.288C45.3799 28.456 45.5799 28.588 45.8119 28.684C46.0519 28.772 46.3159 28.816 46.6039 28.816C47.0199 28.816 47.3799 28.72 47.6839 28.528C47.9879 28.336 48.2199 28.072 48.3799 27.736L49.0879 28.216C48.9039 28.632 48.5959 28.976 48.1639 29.248C47.7399 29.512 47.2199 29.644 46.6039 29.644ZM46.5439 23.956C46.2799 23.956 46.0359 24.004 45.8119 24.1C45.5879 24.196 45.3919 24.328 45.2239 24.496C45.0639 24.664 44.9359 24.864 44.8399 25.096C44.7519 25.32 44.7079 25.568 44.7079 25.84V25.924H48.2599V25.792C48.2599 25.52 48.2159 25.272 48.1279 25.048C48.0479 24.824 47.9319 24.632 47.7799 24.472C47.6359 24.304 47.4559 24.176 47.2399 24.088C47.0319 24 46.7999 23.956 46.5439 23.956ZM0.804014 49.5V41.124H3.85201C4.62801 41.124 5.22001 41.336 5.62801 41.76C6.03601 42.184 6.24001 42.776 6.24001 43.536C6.24001 44.296 6.03601 44.888 5.62801 45.312C5.22001 45.736 4.62801 45.948 3.85201 45.948H1.81201V49.5H0.804014ZM1.81201 45.072H3.82801C4.25201 45.072 4.58001 44.968 4.81201 44.76C5.05201 44.544 5.17201 44.24 5.17201 43.848V43.224C5.17201 42.832 5.05201 42.532 4.81201 42.324C4.58001 42.108 4.25201 42 3.82801 42H1.81201V45.072ZM7.84333 48.684H9.65533V44.124H7.84333V43.308H10.6153V44.868H10.6753C10.8033 44.38 11.0433 44 11.3953 43.728C11.7553 43.448 12.2113 43.308 12.7633 43.308H13.6273V44.268H12.4633C11.9113 44.268 11.4633 44.428 11.1193 44.748C10.7833 45.068 10.6153 45.488 10.6153 46.008V48.684H13.0153V49.5H7.84333V48.684ZM17.7146 49.644C17.2826 49.644 16.8906 49.568 16.5386 49.416C16.1946 49.264 15.8986 49.048 15.6506 48.768C15.4106 48.48 15.2266 48.14 15.0986 47.748C14.9706 47.348 14.9066 46.9 14.9066 46.404C14.9066 45.916 14.9706 45.472 15.0986 45.072C15.2266 44.672 15.4106 44.332 15.6506 44.052C15.8986 43.764 16.1946 43.544 16.5386 43.392C16.8906 43.24 17.2826 43.164 17.7146 43.164C18.1466 43.164 18.5346 43.24 18.8786 43.392C19.2306 43.544 19.5266 43.764 19.7666 44.052C20.0146 44.332 20.2026 44.672 20.3306 45.072C20.4586 45.472 20.5226 45.916 20.5226 46.404C20.5226 46.9 20.4586 47.348 20.3306 47.748C20.2026 48.14 20.0146 48.48 19.7666 48.768C19.5266 49.048 19.2306 49.264 18.8786 49.416C18.5346 49.568 18.1466 49.644 17.7146 49.644ZM17.7146 48.816C18.2506 48.816 18.6826 48.656 19.0106 48.336C19.3386 48.016 19.5026 47.52 19.5026 46.848V45.96C19.5026 45.288 19.3386 44.792 19.0106 44.472C18.6826 44.152 18.2506 43.992 17.7146 43.992C17.1786 43.992 16.7466 44.152 16.4186 44.472C16.0906 44.792 15.9266 45.288 15.9266 45.96V46.848C15.9266 47.52 16.0906 48.016 16.4186 48.336C16.7466 48.656 17.1786 48.816 17.7146 48.816ZM26.41 48.492H26.362C25.962 49.26 25.326 49.644 24.454 49.644C23.694 49.644 23.098 49.36 22.666 48.792C22.242 48.224 22.03 47.428 22.03 46.404C22.03 45.38 22.242 44.584 22.666 44.016C23.098 43.448 23.694 43.164 24.454 43.164C25.326 43.164 25.962 43.548 26.362 44.316H26.41V40.62H27.37V49.5H26.41V48.492ZM24.826 48.792C25.042 48.792 25.246 48.764 25.438 48.708C25.63 48.652 25.798 48.572 25.942 48.468C26.086 48.356 26.198 48.224 26.278 48.072C26.366 47.912 26.41 47.728 26.41 47.52V45.288C26.41 45.08 26.366 44.9 26.278 44.748C26.198 44.588 26.086 44.456 25.942 44.352C25.798 44.24 25.63 44.156 25.438 44.1C25.246 44.044 25.042 44.016 24.826 44.016C24.266 44.016 23.83 44.188 23.518 44.532C23.214 44.868 23.062 45.316 23.062 45.876V46.932C23.062 47.492 23.214 47.944 23.518 48.288C23.83 48.624 24.266 48.792 24.826 48.792ZM33.5693 48.492H33.5213C33.4573 48.644 33.3773 48.792 33.2813 48.936C33.1853 49.072 33.0653 49.192 32.9213 49.296C32.7853 49.4 32.6213 49.484 32.4293 49.548C32.2373 49.612 32.0133 49.644 31.7573 49.644C31.1093 49.644 30.5893 49.44 30.1973 49.032C29.8053 48.616 29.6093 48.032 29.6093 47.28V43.308H30.5693V47.112C30.5693 47.68 30.6933 48.104 30.9413 48.384C31.1893 48.656 31.5533 48.792 32.0333 48.792C32.2253 48.792 32.4133 48.768 32.5973 48.72C32.7813 48.672 32.9453 48.6 33.0893 48.504C33.2333 48.408 33.3493 48.288 33.4373 48.144C33.5253 47.992 33.5693 47.812 33.5693 47.604V43.308H34.5293V49.5H33.5693V48.492ZM39.5166 49.644C39.0686 49.644 38.6686 49.568 38.3166 49.416C37.9726 49.256 37.6806 49.036 37.4406 48.756C37.2006 48.476 37.0166 48.136 36.8886 47.736C36.7686 47.336 36.7086 46.892 36.7086 46.404C36.7086 45.916 36.7726 45.472 36.9006 45.072C37.0286 44.672 37.2126 44.332 37.4526 44.052C37.6926 43.764 37.9846 43.544 38.3286 43.392C38.6726 43.24 39.0646 43.164 39.5046 43.164C40.1046 43.164 40.5926 43.296 40.9686 43.56C41.3446 43.824 41.6206 44.168 41.7966 44.592L41.0286 45C40.9166 44.68 40.7286 44.432 40.4646 44.256C40.2086 44.08 39.8886 43.992 39.5046 43.992C39.2246 43.992 38.9726 44.04 38.7486 44.136C38.5326 44.224 38.3486 44.352 38.1966 44.52C38.0446 44.688 37.9286 44.888 37.8486 45.12C37.7766 45.352 37.7406 45.604 37.7406 45.876V46.932C37.7406 47.204 37.7766 47.456 37.8486 47.688C37.9286 47.92 38.0446 48.12 38.1966 48.288C38.3486 48.456 38.5366 48.588 38.7606 48.684C38.9846 48.772 39.2406 48.816 39.5286 48.816C39.9446 48.816 40.2886 48.72 40.5606 48.528C40.8326 48.336 41.0486 48.072 41.2086 47.736L41.8926 48.204C41.7086 48.62 41.4206 48.964 41.0286 49.236C40.6446 49.508 40.1406 49.644 39.5166 49.644ZM46.6039 49.644C46.1559 49.644 45.7519 49.568 45.3919 49.416C45.0399 49.264 44.7359 49.048 44.4799 48.768C44.2319 48.48 44.0399 48.14 43.9039 47.748C43.7679 47.348 43.6999 46.904 43.6999 46.416C43.6999 45.92 43.7679 45.472 43.9039 45.072C44.0479 44.672 44.2439 44.332 44.4919 44.052C44.7399 43.764 45.0359 43.544 45.3799 43.392C45.7319 43.24 46.1199 43.164 46.5439 43.164C46.9599 43.164 47.3359 43.24 47.6719 43.392C48.0159 43.544 48.3079 43.756 48.5479 44.028C48.7879 44.292 48.9719 44.608 49.0999 44.976C49.2279 45.344 49.2919 45.748 49.2919 46.188V46.644H44.7079V46.932C44.7079 47.204 44.7519 47.456 44.8399 47.688C44.9279 47.92 45.0519 48.12 45.2119 48.288C45.3799 48.456 45.5799 48.588 45.8119 48.684C46.0519 48.772 46.3159 48.816 46.6039 48.816C47.0199 48.816 47.3799 48.72 47.6839 48.528C47.9879 48.336 48.2199 48.072 48.3799 47.736L49.0879 48.216C48.9039 48.632 48.5959 48.976 48.1639 49.248C47.7399 49.512 47.2199 49.644 46.6039 49.644ZM46.5439 43.956C46.2799 43.956 46.0359 44.004 45.8119 44.1C45.5879 44.196 45.3919 44.328 45.2239 44.496C45.0639 44.664 44.9359 44.864 44.8399 45.096C44.7519 45.32 44.7079 45.568 44.7079 45.84V45.924H48.2599V45.792C48.2599 45.52 48.2159 45.272 48.1279 45.048C48.0479 44.824 47.9319 44.632 47.7799 44.472C47.6359 44.304 47.4559 44.176 47.2399 44.088C47.0319 44 46.7999 43.956 46.5439 43.956ZM51.0152 48.684H52.8272V44.124H51.0152V43.308H53.7872V44.868H53.8472C53.9752 44.38 54.2152 44 54.5672 43.728C54.9272 43.448 55.3832 43.308 55.9352 43.308H56.7992V44.268H55.6352C55.0832 44.268 54.6352 44.428 54.2912 44.748C53.9552 45.068 53.7872 45.488 53.7872 46.008V48.684H56.1872V49.5H51.0152V48.684Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <br /><br />
                      We recognize that this is a different system than what
                      performance rights organizations and collections societies
                      have in place*, but we think our process is better suited
                      to contemporary DJ culture. When it comes to remixes and
                      official edits, although the industry standard is that
                      only the original artist gets paid, Aslice takes a
                      different approach—one that we believe benefits everyone
                      involved more equally. We pay all of the artists listed in
                      a track, as those names often influence what records DJs
                      choose to buy and play. Our system should also help to
                      support guest MCs, vocalists and other contributors, who
                      are often overlooked when it comes to compensation.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="general-info-button-23"
                  :class="searchHash === 'general-info-23' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="general-info-23-btn"
                    v-b-toggle="'general-info-23'"
                    block
                    variant="info"
                    @click="scrollToSection('general-info-23')"
                >
                  <div class="faq-title">
                    Does Aslice work with unreleased music? Do music producers earn money even if their tracks are not yet available to the public?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('general-info-23')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="general-info-23"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                   <span>
                     Yes. Music producers earn money when their tracks are played and reported to Aslice, no matter if the music is released or unreleased. As long as the artist has a verifiable public profile/online presence (on Social Media, online music database, website, etc.), our team of admin and machine learning technology can correctly verify and attribute the tracks to the correct artist(s). To learn if your tracks have been played and reported, sign up for free on our homepage.
                   </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-14"
                :class="searchHash === 'general-info-14' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-14-btn"
                  v-b-toggle="'general-info-14'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-14')"
                >
                  <div class="faq-title">What does Aslice do for labels?</div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-14')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-14"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      While our focus is on DJs and producers, we also want to support the record labels releasing the music. With Aslice, registered producers receive direct email notifications when their music is played and reported in DJ playlists. With real-time reporting and dynamic social assets, producers and their record labels finally have tools and talking points to promote themselves and their music in a healthy way online and on social media with our “Social Share” assets. Aslice DJ playlists reflect the actual sounds of our global dancefloors.
                      <br/><br/>
                     Music Producers: Be sure to add your buylink information to your Tracks in the online user dashboard and stay tuned for the upcoming Industry Professionals integration.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-15"
                :class="searchHash === 'general-info-15' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-15-btn"
                  v-b-toggle="'general-info-15'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-15')"
                >
                  <div class="faq-title">
                    Why is Aslice INC a for-profit company and not a non-profit
                    charity?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-15')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-15"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      In order to collect money from DJs globally and allow them
                      to deduct it from their taxes as a business expense,
                      Aslice INC technically has to be a for-profit company.
                      This is something that we have to abide by in order to
                      make the service work for our users, who reside in
                      different territories of the world and are subject to
                      different taxation regimes.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-16"
                :class="searchHash === 'general-info-16' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-16-btn"
                  v-b-toggle="'general-info-16'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-16')"
                >
                  <div class="faq-title">
                    What is the Aslice Foundation and what does it do?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-16')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-16"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      The Aslice Foundation is the arm of the business that handles all non-profit activities. Tasked with directing money toward charitable causes, the foundation will be responsible for all money that either 1) has been shared by DJs for songs that cannot be identified and attributed to a particular artist or 2) has been attributed to producers but left unclaimed for a period of five years or longer*.
                    </span>
                    <br><br>
                    <span>
                      The foundation will be led by a <router-link :to="{ name: 'The Aslice Foundation' }">contribution committee</router-link> which will vet potential charities and help determine where and how money will be spent. All Aslice users will be given the opportunity to both suggest charitable causes and vote on where donations will be directed.
                    </span>
                    <br><br>
                    <span>
                      *Note: our accountant has indicated that we can safely hold money for producers in escrow for at least five years. We’re using this as our official duration, but may be able to extend longer.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-17"
                :class="searchHash === 'general-info-17' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-17-btn"
                  v-b-toggle="'general-info-17'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-17')"
                >
                  <div class="faq-title">
                    What is the Aslice policy concerning privacy, security and
                    data protection?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-17')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-17"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Simply put, we take your security and privacy seriously,
                      and we want only the data we need to operate. We don’t
                      sell your data, we encrypt all personal information and
                      use the same data security as your financial institutions
                      do. Our choice to use PayPal and Stripe as our payment
                      processors means that we don’t store or even have access
                      to any of your banking information. For a more detailed
                      explanation, please check out our
                      <a href="/privacy">Privacy Policy</a>.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-18"
                :class="searchHash === 'general-info-18' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-18-btn"
                  v-b-toggle="'general-info-18'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-18')"
                >
                  <div class="faq-title">
                    How does Aslice ensure that DJs and producers are who they
                    say they are? & Why Does Aslice Use Strict ID Verification?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-18')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-18"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice is an online service where users send and receive money. We verify* DJs and producers through a variety of methods that include, but are not limited to: social media platforms, government IDs (passports and/or driver's licenses), and trusted third-party companies such as Persona, Stripe, PayPal or other financial institutions.
                      <br /><br />
                      Our signup and ID check process requires both a government-issued ID and photo to verify who you are and to make sure your money goes to the right hands.
                      <br /><br />
                      If you have any questions about our third-party identification services, please visit
                      <a href="https://stripe.com/en-de/identity" target="_blank">https://stripe.com/en-de/identity</a> or
                      <a href="https://withpersona.com/about" target="_blank">https://withpersona.com/about</a> to learn more. *Account verification may take up to 30 days.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-20"
                :class="searchHash === 'general-info-20' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-20-btn"
                  v-b-toggle="'general-info-20'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-20')"
                >
                  <div class="faq-title">
                    Does Aslice want to take the place of PROs?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-20')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-20"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice was built as an additional revenue stream for producers, not an alternative. We don’t want to take the place of performance rights organizations (PROs) or supersede them. What we are is something totally different.
                      <br /><br />
                      We have created a portal for information that collection societies actually need to do their job more efficiently. When artists register with Aslice, we ask for their PRO information to facilitate future information sharing and include links to educate users on the importance of being registered with PROs as well. To help us in that effort, please make sure to keep your profile up-to-date by listing your Performance Rights Organization and any publishing company that you work with.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-21"
                :class="searchHash === 'general-info-21' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-21-btn"
                  v-b-toggle="'general-info-21'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-21')"
                >
                  <div class="faq-title">
                    What Does “Per Track Per Play” Mean?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-21')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-21"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      “Per Track, Per Play” describes the amount each track earns in a playlist for a single track,
                      played one time. We believe in equality and fairness, so each unique track on a shared playlist earns an equal share with all the other tracks. For example: A DJ plays 30 unique tracks and shares $50. Each track on the playlist is made by one producer. Each producer would receive an equal share of $1.42. Each producer earns $1.42 <b>per track, per play.</b>
                      <br /><br />
                      To learn more about how producers share earnings for collaborations, remixes, edits, and more,
                      click <a href="/faq?anchor=producer-info-1">here</a>.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="general-info-button-22"
                :class="searchHash === 'general-info-22' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="general-info-22-btn"
                  v-b-toggle="'general-info-22'"
                  block
                  variant="info"
                  @click="scrollToSection('general-info-22')"
                >
                  <div class="faq-title">
                    How do I apply for a job / internship at Aslice?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('general-info-22')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="general-info-22"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      If you would like to apply to the Aslice team, please send us a cover letter and resume to <a
                      href="mailto:info@aslice.com" target="_blank">info@aslice.com</a>.
                      We are gathering all job requests and will respond via your email address about possible opportunities.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="producer-info-button-6"
                  :class="searchHash === 'producer-info-6' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="producer-info-6-btn"
                    v-b-toggle="'producer-info-6'"
                    block
                    variant="info"
                    @click="scrollToSection('producer-info-6')"
                >
                  <div class="faq-title">
                    What happens to unverified and unidentified music?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('producer-info-6')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="producer-info-6"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice will always attempt to identify every song that
                      appears on each uploaded DJ playlist. If a producer's name
                      is listed as unknown on a particular playlist, we may
                      reach out to the DJ who submitted the list and attempt to
                      solve the mystery. However, if they can’t fill in the
                      blank, and all other attempts to identify the track fall
                      short, we will move the money into our non-profit
                      <router-link :to="{ name: 'The Aslice Foundation' }"
                      >Aslice Foundation</router-link
                      >, where it will eventually be donated to charities voted
                      on by Aslice users.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="producer-info-button-16"
                  :class="searchHash === 'producer-info-16' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="producer-info-16-btn"
                    v-b-toggle="'producer-info-16'"
                    block
                    variant="info"
                    @click="scrollToSection('producer-info-16')"
                >
                  <div class="faq-title">
                    What is The Aslice Foundation and how often does the non-profit organization donate to charity?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('producer-info-16')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="producer-info-16"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      The Aslice Foundation is a registered non-profit 501(c)(3) and sister organization of Aslice INC. The foundation provides an annual donation to charity from Aslice’s pool of unmatched earnings. Unmatched music earnings in the Aslice system account for less than 1% of the prior year’s total shared earnings. The Aslice Foundation was founded to donate that pool of unmatched earnings back into the global community. To learn more about The Aslice Foundation and meet the contribution committee, visit
                      <router-link :to="{ name: 'The Aslice Foundation' }">
                        https://aslice.com/theaslicefoundation
                      </router-link>
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          
          </div>
        </div>
        <div class="row registration-info" id="registration-info">
          <div class="row my-5 block-info">
            <h1 class="info-title">Registration</h1>
            <span
                class="copy-faq-url"
                @click.stop="copyFaqUrl('registration-info')"
            >
              <img alt="" src="@/assets/images/link-icon.svg" />
            </span>
          </div>
          <div class="accordion" role="tablist">
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="registration-info-button-1"
                  :class="searchHash === 'registration-info-1' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="registration-info-1-btn"
                    v-b-toggle="'registration-info-1'"
                    block
                    variant="info"
                    @click="scrollToSection('registration-info-1')"
                >
                  <div class="faq-title">
                    How do I sign up / register? What do I need to know before I sign up?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('registration-info-1')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="registration-info-1"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Sign up is free via <a href="/" target="_blank">aslice.com</a>.
                      <br><br>
                      <ul class="m-0">
                        <li>Make sure to have your government-issued ID ready for verification.</li>
                        <li>Registration is easy and takes around 5-10 minutes.</li>
                        <li>Make sure to follow the instructions and stay on the same device during the entire process.</li>
                        <li>If you choose to use your mobile device to verify your identity, be sure to return to your same desktop/laptop to finish the process.</li>
                      </ul>
                      <br>
                      For registration help and tech support: <a href="/contact" target="_blank">https://aslice.com/contact</a>
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="registration-info-button-2"
                  :class="searchHash === 'registration-info-2' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="registration-info-2-btn"
                    v-b-toggle="'registration-info-2'"
                    block
                    variant="info"
                    @click="scrollToSection('registration-info-2')"
                >
                  <div class="faq-title">
                    I just signed up. How long will it take to verify my account?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('registration-info-2')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="registration-info-2"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Account verification can take up to 30 working days. Make sure to fill in all of your aliases and group projects in account preferences. You will receive an email once verification is complete. If we have any additional questions about your account, The Aslice Team will reach out. While you are waiting to get verified, download the desktop app, customize your preferences, and more via the online user dashboard.
                     <br><br>
                      DJs: Although account verification can take up to 30 working days, you can already start sharing your playlists while verification is pending.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="general-info-button-5"
                  :class="searchHash === 'general-info-5' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="general-info-5-btn"
                    v-b-toggle="'general-info-5'"
                    block
                    variant="info"
                    @click="scrollToSection('general-info-5')"
                >
                  <div class="faq-title">
                    Can I register as both a DJ and producer?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('general-info-5')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="general-info-5"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Yes, absolutely. First, register as whichever role you identify with primarily. Once you have completed the registration process, you can unlock and connect your other role. Follow the instructions on the online dashboard to link your DJ and producer profiles.
                      <br><br>
                      These two roles are separated for initial registration, as the verification and payment processes for each have different conditions.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="general-info-button-51"
                  :class="searchHash === 'general-info-51' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="general-info-51-btn"
                    v-b-toggle="'general-info-51'"
                    block
                    variant="info"
                    @click="scrollToSection('general-info-51')"
                >
                  <div class="faq-title">
                    How Should I Register If I Primarily Work As A Duo/Group?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('general-info-51')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="general-info-51"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      If you primarily DJ and/or produce music as a duo or group, we highly recommend that each member signs up individually with Aslice. Once verified by our admin team, each member can connect their duo/group project by filling in the 'Group Name' field in the online dashboard preferences tab.
                      <br><br>
                      Alternatively, users can sign up for the group project using a single account. However, if you choose to represent your duo/group as an individual account, the admin team will contact you during verification with a request that each group member signs a mandatory agreement waiver, allowing for single representation.
                      <br><br>
                      For technical support, send a message through our <a href="/contact">Contact</a> page.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="dj-info-button-17"
                  :class="searchHash === 'dj-info-17' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="dj-info-17-btn"
                    v-b-toggle="'dj-info-17'"
                    block
                    variant="info"
                    @click="scrollToSection('dj-info-17')"
                >
                  <div class="faq-title">
                    Do I need to register twice if I have different aliases?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('dj-info-17')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="dj-info-17"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      No. Once your main artist profile has been verified by our admin team, you have the option to add Groups, Duos, or Aliases under the “<a href="/online-dashboard/preferences/profile" target="_blank">Preferences</a>” tab of your online dashboard. Any alias / group additions to your account will require verification from our admin. Money earned for alias(es)/group membership(s) not yet approved by Aslice are safely held until verified. (Account verification can take up to 30 working days.)
                      <br /><br />
                      For tech support and accounting help, visit our <a href="/contact" target="_blank">Contact page</a>.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="dj-info-button-18"
                  :class="searchHash === 'dj-info-18' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="dj-info-18-btn"
                    v-b-toggle="'dj-info-18'"
                    block
                    variant="info"
                    @click="scrollToSection('dj-info-18')"
                >
                  <div class="faq-title">
                    I just attempted to register and have been notified my profile has been put into a pending/hold status. What does this mean?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('dj-info-18')"
                  >
                      <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="dj-info-18"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Your DJ/producer account could have been moved into a temporary hold state because you either have not yet released music that can be matched in public databases or because you have limited social media links for us to verify your artist identity. We have built a system to keep profiles in a temporary unverified status until a track of yours gets played. Once a working DJ uploads a playlist containing one of your tracks, we will verify your profile and notify you.
                    </span>
                    <br><br>
                    <span>
                      We highly recommend that you register all your social media and online music accounts under your unique artist name and always keep your Aslice profile up to date in the “Preferences” menu of the online dashboard.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
        <div class="row dj-info" id="dj-info">
          <div class="row my-5 block-info">
            <h1 class="info-title">DJ</h1>
            <span
              class="copy-faq-url"
              @click.stop="copyFaqUrl('dj-info')"
            >
              <img alt="" src="@/assets/images/link-icon.svg" /> 
            </span> 
          </div>
          <div class="accordion" role="tablist">
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="dj-info-button-15"
                  :class="searchHash === 'dj-info-15' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="dj-info-15-btn"
                    v-b-toggle="'dj-info-15'"
                    block
                    variant="info"
                    @click="scrollToSection('dj-info-15')"
                >
                  <div class="faq-title">
                    What are the benefits of using Aslice as a working DJ? How does Aslice help promote my career?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('dj-info-15')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="dj-info-15"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice is the easy button for DJs to share with producers. Sharing with the producers whose music they play helps fuel the fire to keep creating – both in the studio and behind the decks.
                      <br /><br />
                      Aslice gives DJs easy tools to promote their good deeds and share recognition of their favorite music makers. Producers will drive attention back to DJs spreading the word about their support. Community in action!
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-1"
                :class="searchHash === 'dj-info-1' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-1-btn"
                  v-b-toggle="'dj-info-1'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-1')"
                >
                  <div class="faq-title">
                    If I submit a playlist to Aslice, will it be visible to the
                    public?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-1')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" /> 
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-1"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Yes. Playlists will be visible once we launch the fan
                      section of Aslice, however the amount shared will never be
                      disclosed publicly.
                      <br /><br />
                      After you submit a playlist and it goes through the
                      matching and identification process (which can take up to
                      30 days), it will then be viewable to the public. However,
                      if you're apprehensive about sharing, there are some
                      options to limit what people can see explained below in
                      the next FAQ questions and answers.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-22"
                :class="searchHash === 'dj-info-22' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-22-btn"
                  v-b-toggle="'dj-info-22'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-22')"
                >
                  <div class="faq-title">
                    How long does it take to approve my playlist after I submit it?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-22')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-22"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Playlist approval may take up to <strong>30 business days to approve</strong>, although typically our admin is much faster approving playlists in only a few days. Our team works diligently to make sure the correct music producers are credited and may reach out to DJs to help fill in any missing playlist information, should it be necessary. Playlist accuracy is of utmost importance. We thank you for your patience!
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-2"
                :class="searchHash === 'dj-info-2' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-2-btn"
                  v-b-toggle="'dj-info-2'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-2')"
                >
                  <div class="faq-title">
                    What if I want to hide all of my tracks from the public?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-2')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      We believe that the way forward is to be transparent and
                      help promote everyone's work, but we also understand that
                      maintaining some level of secrecy has long been a part of
                      DJ culture. Given that, you can set a global preference
                      for your playlists, choosing to either expose the complete
                      artist and track information or limit your playlists so
                      that only the artist name appears.
                      <br /><br />
                      The latter option ensures that the music's creator is
                      still being supported, while keeping the track itself
                      secret.
                      <br /><br />
                      Regardless of what option you choose, it's also important
                      to remember that only text will be displayed—no one will
                      be able to stream or download the actual audio from your
                      set
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-3"
                :class="searchHash === 'dj-info-3' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-3-btn"
                  v-b-toggle="'dj-info-3'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-3')"
                >
                  <div class="faq-title">
                    Is it possible to hide particular songs in my playlist?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-3')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Yes. Before you submit your playlist, you can press the
                      “hide” button next to any track and anything selected will
                      be displayed as “hidden” to the public. This might come in
                      handy if you've played an unreleased track and aren't
                      quite ready to share the details with the world. At the
                      same time, please remember that we believe in (and
                      strongly encourage) promoting the artists whose music you
                      play, so we ask that you try and use this feature
                      sparingly.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-20"
                :class="searchHash === 'dj-info-20' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-20-btn"
                  v-b-toggle="'dj-info-20'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-20')"
                >
                  <div class="faq-title">
                    What if I want to hide my full track information from the music producers I play? What is the Beta Hide Pro Feature and how do I turn it on before sharing with producers?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-20')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-20"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      When a DJ shares their playlist via Aslice, our system notifications always default to share the full track details played with the producer(s) on that track. However, we understand some working DJs may want to hide their full track information from the artists on their playlists. 
                      <br><br>
                      Our new Beta Hide Details Pro Feature adds another level of privacy for working DJs. By enabling this feature, all the tracks on your uploaded playlist will be reported to the producers in a simplified manner, without revealing the specific track title on the shared playlists.* Once a DJ has selected and saved the preferences to “HIDE TRACK DETAILS”, the producer will only receive a baseline notification. For Example – “DJ Jane Doe has played and reported your music.” This feature changes the default to hide full track details while still allowing the DJ to share earnings with the music makers on submitted playlists. 
                      <br><br>
                      To enable this new feature, DJs need to first download/update to the latest Aslice desktop app version. Then, head to the app menu “Preferences”, where you will find the Beta Hide Feature drop-down choice. Remember to press the “Save” button to activate the new feature. The purple label marker on the desktop app window will show the feature status as either “ON/OFF” at all times.
                    </span>
                  </b-card-text>
                  <img alt="" src="@/assets/images/faq/image1.png" />
                  <img alt="" src="@/assets/images/faq/image2.png" style="max-width: 300px;"/>
                  <b-card-text>
                    <span>
                      *Enabling this advanced privacy option raises the minimum share amount from 10 €/$/£ to 30 €/$/£. We felt it is both reasonable and fair that DJs would share a higher minimum amount when choosing to select the option to hide their full track details.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-4"
                :class="searchHash === 'dj-info-4' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-4-btn"
                  v-b-toggle="'dj-info-4'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-4')"
                >
                  <div class="faq-title">
                    What happens if I miss a playlist upload for a gig?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-4')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      You can always submit a missed playlist, even if weeks or
                      months have already gone by. Simply open the Aslice
                      desktop app, click “+ Playlist” and follow the
                      instructions.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-20"
                :class="searchHash === 'dj-info-21' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-21-btn"
                  v-b-toggle="'dj-info-21'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-21')"
                >
                  <div class="faq-title">
                    I’m a DJ. How can I upload multiple playlists at once to save time?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-21')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-21"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      To upload multiple playlists at once, Open the Aslice desktop app. Drag and drop all your playlist text files you want to upload. Click the checkbox “Playlist” to select all. Fill in all your gig details for each playlist. Then, click “Submit” to upload all multiple playlists at once.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-5"
                :class="searchHash === 'dj-info-5' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-5-btn"
                  v-b-toggle="'dj-info-5'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-5')"
                >
                  <div class="faq-title">
                    If I import a playlist and realize that it's not completely
                    accurate, do I have to submit the information as-is?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-5')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      No. If you see that a particular track wasn't actually
                      played in your set—for instance, maybe you cued it up, but
                      didn't play it out—you can easily remove it by clicking
                      the “remove” button. Aside from that, you can also edit
                      the artist and track information for any track in your
                      playlist before you press “submit.”
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-6"
                :class="searchHash === 'dj-info-6' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-6-btn"
                  v-b-toggle="'dj-info-6'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-6')"
                >
                  <div class="faq-title">
                    What if I play my own music in a DJ set?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-6')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      When you submit a playlist with your own music, our system
                      automatically cancels out any corresponding payments that
                      would otherwise be funneled to you as a producer. That
                      money instead gets dispersed equally between all of the
                      other tracks on your playlist. (For instance, if you
                      submit a playlist with 30 tracks, and five of them are
                      your own music, then whatever amount you shared will be
                      split between the creators of the other 25 tracks.)
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-7"
                :class="searchHash === 'dj-info-7' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-7-btn"
                  v-b-toggle="'dj-info-7'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-7')"
                >
                  <div class="faq-title">
                    What happens if an artist submits a playlist that only
                    contains their own tracks?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-7')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              
              <b-collapse
                id="dj-info-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Nothing. The payment will automatically be canceled. If
                      you play an entire set of your own music, then don't
                      upload it.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-20"
                :class="searchHash === 'dj-info-20' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-20-btn"
                  v-b-toggle="'dj-info-20'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-20')"
                >
                  <div class="faq-title">
                    Do I need to upload my music to Aslice in order to get paid?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-20')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              
              <b-collapse
                id="dj-info-20"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      No. Aslice works by gathering DJ playlists as text files. Our machine learning algorithm and Aslice admins match the text metadata in the tracks to your artist name and account for your earnings all without the need for any audio files.
                    </span>
                    <span>
                      Tip: Make sure your metadata is prepared correctly when sending music out into the world. Additionally, consider using your Aslice ID number in either the artist or track field (this is especially useful for unreleased music).
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-8"
                :class="searchHash === 'dj-info-8' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-8-btn"
                  v-b-toggle="'dj-info-8'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-8')"
                >
                  <div class="faq-title">
                    What if I only DJ with vinyl, physical CDs or software like
                    Ableton? Can I still use Aslice?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-8')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Yes. Regardless of what format(s) you use to DJ, you can
                      always create a playlist manually through the Aslice
                      desktop app.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-9"
                :class="searchHash === 'dj-info-9' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-9-btn"
                  v-b-toggle="'dj-info-9'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-9')"
                >
                  <div class="faq-title">
                    I DJ with multiple USB sticks. How do I create a single
                    Aslice playlist?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-9')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-9"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      If you use different sticks at the same gig, your DJ
                      software will automatically create similarly named data
                      files (usually, this is the date with a 1, 2, 3, etc.).
                      Knowing this, you can easily select the relevant playlists
                      and use the “combine” button in the Aslice interface
                      before submitting a final confirmed playlist.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-10"
                :class="searchHash === 'dj-info-10' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-10-btn"
                  v-b-toggle="'dj-info-10'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-10')"
                >
                  <div class="faq-title">
                    Should I submit a playlist and payment for a livestream,
                    podcast or mix?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-10')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-10"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      That’s up to you! If you’re making money from it, then we
                      absolutely encourage it.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-11"
                :class="searchHash === 'dj-info-11' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-11-btn"
                  v-b-toggle="'dj-info-11'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-11')"
                >
                  <div class="faq-title">
                    What are the tax benefits for DJs?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-11')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-11"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      In most cases, DJs who are using Aslice are eligible to count their payments as tax deductions in their respective territories*. All of the necessary records and reports are available under the “Accounting” tab via the DJ dashboard. Aslice also emails end-of-year statements to all users.
                      <br /><br />
                      *All users are responsible for their own reporting and are advised to consult with tax authorities in their respective territories.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-12"
                :class="searchHash === 'dj-info-12' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-12-btn"
                  v-b-toggle="'dj-info-12'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-12')"
                >
                  <div class="faq-title">
                    Are any of the figures I put into the gig fee calculator
                    publicly viewable?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-12')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-12"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      No. Aslice doesn’t actually collect any of this
                      information. The gig fee calculator is only meant to
                      assist you in deciding how much you’d like to give from
                      each performance. The suggested percentage is merely a
                      starting point.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-13"
                :class="searchHash === 'dj-info-13' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-13-btn"
                  v-b-toggle="'dj-info-13'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-13')"
                >
                  <div class="faq-title">
                    Should I share more or less than 5% of my DJ fee?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-13')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-13"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      The 5% figure is merely a starting point (feel free to
                      give more), but we settled on that number as something
                      that could really make a difference to producers without
                      feeling like a burden to DJs*. At the same time, it’s
                      important to remember that Aslice is completely voluntary,
                      so there is no mandatory percentage. Remember though: the
                      more you give, the more you can deduct on your taxes!
                      <br /><br />
                      **If all working DJs contributed 5% of their fees, $55
                      million dollars per year would be paid to producers that
                      never would have been paid otherwise. (This figure is
                      based on $1.1 billion in reported DJ earnings during 2019,
                      as cited in the IMS business report.)
                      <br /><br />
                      <a
                        href="https://www.internationalmusicsummit.com/wp-content/uploads/2019/05/IMS-Business-Report-2019-vFinal.pdf"
                        target="_blank"
                      >IMS Business Report</a
                      >
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-14"
                :class="searchHash === 'dj-info-14' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-14-btn"
                  v-b-toggle="'dj-info-14'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-14')"
                >
                  <div class="faq-title">
                    Why should DJs share via Aslice if they already bought the music they play?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-14')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-14"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice is completely voluntary and was created for working DJs who earn income from paid gigs. Every DJ has to decide if they want to share and how much. Keep in mind: Aslice suggests 5% of their pre-tax gig income. Feel free to give more or less.
                      <br /><br />
                      Even if a producer makes a record and sells their music, there is no guarantee that they will be paid for their work. Releasing music has fixed costs such as mastering, mixing, artwork, promotion, and many more. These costs don’t change regardless if you sell 10 copies or 1,000. The industry norm sees the producer being paid last (if at all), with the labels, managers, publicists, etc., getting paid first.
                      <br /><br />
                      Even if a DJ buys every record they play, the existing model only pays a producer once for that sale. With Aslice, that same producer gets their fair share every time a working DJ plays their music at a paid gig.
                      <br /><br />
                      Unfortunately, very few producers can earn a living only from releasing music on record labels and streaming. A majority of DJs build their careers by playing other people’s music. We are all aware of the income inequality between working DJs and producers. Our mission is to reduce that gap.
                      <br /><br />
                      Sharing via Aslice not only promotes your music and shows recognition to your peers, Aslice is community in action!
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="dj-info-button-19"
                :class="searchHash === 'dj-info-19' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="dj-info-19-btn"
                  v-b-toggle="'dj-info-19'"
                  block
                  variant="info"
                  @click="scrollToSection('dj-info-19')"
                >
                  <div class="faq-title">
                    Will Aslice change what music DJs play?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('dj-info-19')"
                  >
                      <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="dj-info-19"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice promotes community not competition. What a DJ chooses to play is entirely up to them. The benefits of submitting playlists means that everyone gets paid, from bedroom producers to established, working artists. We hope that Aslice will broaden our community network and positively influence music and track plays across diverse spectrums.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          
          </div>
        </div>
        <div class="row producer-info" id="producer-info">
          <div class="row my-5 block-info">
            <h1 class="info-title">Producer</h1>
            <span
              class="copy-faq-url"
              @click.stop="copyFaqUrl('producer-info')"
            >
              <img alt="" src="@/assets/images/link-icon.svg" /> 
            </span>
          </div>
          <div class="accordion" role="tablist">
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-1"
                :class="searchHash === 'producer-info-1' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-1-btn"
                  v-b-toggle="'producer-info-1'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-1')"
                >
                  <div class="faq-title">
                    How do you divide producer payments for collaborations,
                    remixes, edits, etc.?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-1')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-1"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      <div class="col-12 accordion-additional-content">
                        <div class="row">
                          <div
                            class="col-lg-4 col-12"
                            style="position: relative;"
                          >
                            <p class="add-content-title text-center">
                              SOLO ARTIST
                            </p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                style="position: relative;"
                                viewBox="0 0 217 217"
                                width="217"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M108.505 108.505V0C168.429 0 217.01 48.5811 217.01 108.505C217.01 168.429 168.429 217.01 108.505 217.01C48.5811 217.01 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="52"
                                viewBox="0 0 57 52"
                                width="57"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.1151 9.45886V8.58286H17.5151V1.82686H17.4311L15.3191 3.79486L14.7311 3.15886L16.9511 1.08286H18.5231V8.58286H20.7311V9.45886H15.1151ZM24.8904 9.60286C24.3784 9.60286 23.9384 9.50686 23.5704 9.31486C23.2024 9.11486 22.8984 8.83086 22.6584 8.46286C22.4184 8.09486 22.2424 7.64286 22.1304 7.10686C22.0184 6.57086 21.9624 5.95886 21.9624 5.27086C21.9624 4.59086 22.0184 3.98286 22.1304 3.44686C22.2424 2.90286 22.4184 2.44686 22.6584 2.07886C22.8984 1.71086 23.2024 1.43086 23.5704 1.23886C23.9384 1.03886 24.3784 0.938862 24.8904 0.938862C25.4024 0.938862 25.8424 1.03886 26.2104 1.23886C26.5784 1.43086 26.8824 1.71086 27.1224 2.07886C27.3624 2.44686 27.5384 2.90286 27.6504 3.44686C27.7624 3.98286 27.8184 4.59086 27.8184 5.27086C27.8184 5.95886 27.7624 6.57086 27.6504 7.10686C27.5384 7.64286 27.3624 8.09486 27.1224 8.46286C26.8824 8.83086 26.5784 9.11486 26.2104 9.31486C25.8424 9.50686 25.4024 9.60286 24.8904 9.60286ZM24.8904 8.72686C25.2264 8.72686 25.5144 8.66286 25.7544 8.53486C25.9944 8.39886 26.1864 8.21086 26.3304 7.97086C26.4824 7.73086 26.5944 7.44286 26.6664 7.10686C26.7384 6.76286 26.7744 6.37886 26.7744 5.95486V4.58686C26.7744 4.17086 26.7384 3.79086 26.6664 3.44686C26.5944 3.10286 26.4824 2.81086 26.3304 2.57086C26.1864 2.33086 25.9944 2.14686 25.7544 2.01886C25.5144 1.88286 25.2264 1.81486 24.8904 1.81486C24.5544 1.81486 24.2664 1.88286 24.0264 2.01886C23.7864 2.14686 23.5904 2.33086 23.4384 2.57086C23.2944 2.81086 23.1864 3.10286 23.1144 3.44686C23.0424 3.79086 23.0064 4.17086 23.0064 4.58686V5.95486C23.0064 6.37886 23.0424 6.76286 23.1144 7.10686C23.1864 7.44286 23.2944 7.73086 23.4384 7.97086C23.5904 8.21086 23.7864 8.39886 24.0264 8.53486C24.2664 8.66286 24.5544 8.72686 24.8904 8.72686ZM24.8904 5.97886C24.6104 5.97886 24.4144 5.92286 24.3024 5.81086C24.1984 5.69886 24.1464 5.56286 24.1464 5.40286V5.13886C24.1464 4.97886 24.1984 4.84286 24.3024 4.73086C24.4144 4.61886 24.6104 4.56286 24.8904 4.56286C25.1704 4.56286 25.3624 4.61886 25.4664 4.73086C25.5784 4.84286 25.6344 4.97886 25.6344 5.13886V5.40286C25.6344 5.56286 25.5784 5.69886 25.4664 5.81086C25.3624 5.92286 25.1704 5.97886 24.8904 5.97886ZM32.0857 9.60286C31.5737 9.60286 31.1337 9.50686 30.7657 9.31486C30.3977 9.11486 30.0937 8.83086 29.8537 8.46286C29.6137 8.09486 29.4377 7.64286 29.3257 7.10686C29.2137 6.57086 29.1577 5.95886 29.1577 5.27086C29.1577 4.59086 29.2137 3.98286 29.3257 3.44686C29.4377 2.90286 29.6137 2.44686 29.8537 2.07886C30.0937 1.71086 30.3977 1.43086 30.7657 1.23886C31.1337 1.03886 31.5737 0.938862 32.0857 0.938862C32.5977 0.938862 33.0377 1.03886 33.4057 1.23886C33.7737 1.43086 34.0777 1.71086 34.3177 2.07886C34.5577 2.44686 34.7337 2.90286 34.8457 3.44686C34.9577 3.98286 35.0137 4.59086 35.0137 5.27086C35.0137 5.95886 34.9577 6.57086 34.8457 7.10686C34.7337 7.64286 34.5577 8.09486 34.3177 8.46286C34.0777 8.83086 33.7737 9.11486 33.4057 9.31486C33.0377 9.50686 32.5977 9.60286 32.0857 9.60286ZM32.0857 8.72686C32.4217 8.72686 32.7097 8.66286 32.9497 8.53486C33.1897 8.39886 33.3817 8.21086 33.5257 7.97086C33.6777 7.73086 33.7897 7.44286 33.8617 7.10686C33.9337 6.76286 33.9697 6.37886 33.9697 5.95486V4.58686C33.9697 4.17086 33.9337 3.79086 33.8617 3.44686C33.7897 3.10286 33.6777 2.81086 33.5257 2.57086C33.3817 2.33086 33.1897 2.14686 32.9497 2.01886C32.7097 1.88286 32.4217 1.81486 32.0857 1.81486C31.7497 1.81486 31.4617 1.88286 31.2217 2.01886C30.9817 2.14686 30.7857 2.33086 30.6337 2.57086C30.4897 2.81086 30.3817 3.10286 30.3097 3.44686C30.2377 3.79086 30.2017 4.17086 30.2017 4.58686V5.95486C30.2017 6.37886 30.2377 6.76286 30.3097 7.10686C30.3817 7.44286 30.4897 7.73086 30.6337 7.97086C30.7857 8.21086 30.9817 8.39886 31.2217 8.53486C31.4617 8.66286 31.7497 8.72686 32.0857 8.72686ZM32.0857 5.97886C31.8057 5.97886 31.6097 5.92286 31.4977 5.81086C31.3937 5.69886 31.3417 5.56286 31.3417 5.40286V5.13886C31.3417 4.97886 31.3937 4.84286 31.4977 4.73086C31.6097 4.61886 31.8057 4.56286 32.0857 4.56286C32.3657 4.56286 32.5577 4.61886 32.6617 4.73086C32.7737 4.84286 32.8297 4.97886 32.8297 5.13886V5.40286C32.8297 5.56286 32.7737 5.69886 32.6617 5.81086C32.5577 5.92286 32.3657 5.97886 32.0857 5.97886ZM37.709 5.18686C37.181 5.18686 36.749 5.01086 36.413 4.65886C36.085 4.29886 35.921 3.76686 35.921 3.06286C35.921 2.35886 36.085 1.83086 36.413 1.47886C36.749 1.11886 37.181 0.938862 37.709 0.938862C38.237 0.938862 38.665 1.11886 38.993 1.47886C39.329 1.83086 39.497 2.35886 39.497 3.06286C39.497 3.76686 39.329 4.29886 38.993 4.65886C38.665 5.01086 38.237 5.18686 37.709 5.18686ZM37.709 4.53886C37.997 4.53886 38.229 4.43886 38.405 4.23886C38.589 4.03886 38.681 3.74686 38.681 3.36286V2.76286C38.681 2.37886 38.589 2.08686 38.405 1.88686C38.229 1.68686 37.997 1.58686 37.709 1.58686C37.421 1.58686 37.185 1.68686 37.001 1.88686C36.825 2.08686 36.737 2.37886 36.737 2.76286V3.36286C36.737 3.74686 36.825 4.03886 37.001 4.23886C37.185 4.43886 37.421 4.53886 37.709 4.53886ZM41.801 1.08286H42.665L40.745 4.68286H39.881L41.801 1.08286ZM37.817 5.85886H38.681L36.761 9.45886H35.897L37.817 5.85886ZM40.853 9.60286C40.325 9.60286 39.893 9.42686 39.557 9.07486C39.229 8.71486 39.065 8.18286 39.065 7.47886C39.065 6.77486 39.229 6.24686 39.557 5.89486C39.893 5.53486 40.325 5.35486 40.853 5.35486C41.381 5.35486 41.809 5.53486 42.137 5.89486C42.473 6.24686 42.641 6.77486 42.641 7.47886C42.641 8.18286 42.473 8.71486 42.137 9.07486C41.809 9.42686 41.381 9.60286 40.853 9.60286ZM40.853 8.95486C41.141 8.95486 41.373 8.85486 41.549 8.65486C41.733 8.45486 41.825 8.16286 41.825 7.77886V7.17886C41.825 6.79486 41.733 6.50286 41.549 6.30286C41.373 6.10286 41.141 6.00286 40.853 6.00286C40.565 6.00286 40.329 6.10286 40.145 6.30286C39.969 6.50286 39.881 6.79486 39.881 7.17886V7.77886C39.881 8.16286 39.969 8.45486 40.145 8.65486C40.329 8.85486 40.565 8.95486 40.853 8.95486ZM10.7998 29.4589C10.3278 29.4589 9.9798 29.3269 9.7558 29.0629C9.5398 28.7989 9.4318 28.4589 9.4318 28.0429V24.0829H7.3678V23.2669H8.9038C9.1118 23.2669 9.2558 23.2269 9.3358 23.1469C9.4238 23.0589 9.4678 22.9109 9.4678 22.7029V21.0829H10.3918V23.2669H13.2118V24.0829H10.3918V28.6429H13.2118V29.4589H10.7998ZM17.6951 29.6029C17.2631 29.6029 16.8711 29.5269 16.5191 29.3749C16.1751 29.2229 15.8791 29.0069 15.6311 28.7269C15.3911 28.4389 15.2071 28.0989 15.0791 27.7069C14.9511 27.3069 14.8871 26.8589 14.8871 26.3629C14.8871 25.8749 14.9511 25.4309 15.0791 25.0309C15.2071 24.6309 15.3911 24.2909 15.6311 24.0109C15.8791 23.7229 16.1751 23.5029 16.5191 23.3509C16.8711 23.1989 17.2631 23.1229 17.6951 23.1229C18.1271 23.1229 18.5151 23.1989 18.8591 23.3509C19.2111 23.5029 19.5071 23.7229 19.7471 24.0109C19.9951 24.2909 20.1831 24.6309 20.3111 25.0309C20.4391 25.4309 20.5031 25.8749 20.5031 26.3629C20.5031 26.8589 20.4391 27.3069 20.3111 27.7069C20.1831 28.0989 19.9951 28.4389 19.7471 28.7269C19.5071 29.0069 19.2111 29.2229 18.8591 29.3749C18.5151 29.5269 18.1271 29.6029 17.6951 29.6029ZM17.6951 28.7749C18.2311 28.7749 18.6631 28.6149 18.9911 28.2949C19.3191 27.9749 19.4831 27.4789 19.4831 26.8069V25.9189C19.4831 25.2469 19.3191 24.7509 18.9911 24.4309C18.6631 24.1109 18.2311 23.9509 17.6951 23.9509C17.1591 23.9509 16.7271 24.1109 16.3991 24.4309C16.0711 24.7509 15.9071 25.2469 15.9071 25.9189V26.8069C15.9071 27.4789 16.0711 27.9749 16.3991 28.2949C16.7271 28.6149 17.1591 28.7749 17.6951 28.7749ZM32.3857 29.4589C31.9137 29.4589 31.5657 29.3269 31.3417 29.0629C31.1257 28.7989 31.0177 28.4589 31.0177 28.0429V24.0829H28.9537V23.2669H30.4897C30.6977 23.2669 30.8417 23.2269 30.9217 23.1469C31.0097 23.0589 31.0537 22.9109 31.0537 22.7029V21.0829H31.9777V23.2669H34.7977V24.0829H31.9777V28.6429H34.7977V29.4589H32.3857ZM36.857 20.5789H37.817V24.2749H37.865C37.929 24.1229 38.009 23.9789 38.105 23.8429C38.201 23.6989 38.317 23.5749 38.453 23.4709C38.597 23.3669 38.765 23.2829 38.957 23.2189C39.149 23.1549 39.373 23.1229 39.629 23.1229C40.277 23.1229 40.797 23.3309 41.189 23.7469C41.581 24.1549 41.777 24.7349 41.777 25.4869V29.4589H40.817V25.6549C40.817 25.0869 40.693 24.6669 40.445 24.3949C40.197 24.1149 39.833 23.9749 39.353 23.9749C39.161 23.9749 38.973 23.9989 38.789 24.0469C38.605 24.0949 38.441 24.1669 38.297 24.2629C38.153 24.3589 38.037 24.4829 37.949 24.6349C37.861 24.7869 37.817 24.9629 37.817 25.1629V29.4589H36.857V20.5789ZM46.5844 29.6029C46.1364 29.6029 45.7324 29.5269 45.3724 29.3749C45.0204 29.2229 44.7164 29.0069 44.4604 28.7269C44.2124 28.4389 44.0204 28.0989 43.8844 27.7069C43.7484 27.3069 43.6804 26.8629 43.6804 26.3749C43.6804 25.8789 43.7484 25.4309 43.8844 25.0309C44.0284 24.6309 44.2244 24.2909 44.4724 24.0109C44.7204 23.7229 45.0164 23.5029 45.3604 23.3509C45.7124 23.1989 46.1004 23.1229 46.5244 23.1229C46.9404 23.1229 47.3164 23.1989 47.6524 23.3509C47.9964 23.5029 48.2884 23.7149 48.5284 23.9869C48.7684 24.2509 48.9524 24.5669 49.0804 24.9349C49.2084 25.3029 49.2724 25.7069 49.2724 26.1469V26.6029H44.6884V26.8909C44.6884 27.1629 44.7324 27.4149 44.8204 27.6469C44.9084 27.8789 45.0324 28.0789 45.1924 28.2469C45.3604 28.4149 45.5604 28.5469 45.7924 28.6429C46.0324 28.7309 46.2964 28.7749 46.5844 28.7749C47.0004 28.7749 47.3604 28.6789 47.6644 28.4869C47.9684 28.2949 48.2004 28.0309 48.3604 27.6949L49.0684 28.1749C48.8844 28.5909 48.5764 28.9349 48.1444 29.2069C47.7204 29.4709 47.2004 29.6029 46.5844 29.6029ZM46.5244 23.9149C46.2604 23.9149 46.0164 23.9629 45.7924 24.0589C45.5684 24.1549 45.3724 24.2869 45.2044 24.4549C45.0444 24.6229 44.9164 24.8229 44.8204 25.0549C44.7324 25.2789 44.6884 25.5269 44.6884 25.7989V25.8829H48.2404V25.7509C48.2404 25.4789 48.1964 25.2309 48.1084 25.0069C48.0284 24.7829 47.9124 24.5909 47.7604 24.4309C47.6164 24.2629 47.4364 24.1349 47.2204 24.0469C47.0124 23.9589 46.7804 23.9149 46.5244 23.9149ZM0.844483 43.2669H1.80448V44.2749H1.85248C2.25248 43.5069 2.88848 43.1229 3.76048 43.1229C4.52048 43.1229 5.11248 43.4069 5.53648 43.9749C5.96848 44.5429 6.18448 45.3389 6.18448 46.3629C6.18448 47.3869 5.96848 48.1829 5.53648 48.7509C5.11248 49.3189 4.52048 49.6029 3.76048 49.6029C2.88848 49.6029 2.25248 49.2189 1.85248 48.4509H1.80448V51.8589H0.844483V43.2669ZM3.38848 48.7509C3.94848 48.7509 4.38048 48.5829 4.68448 48.2469C4.99648 47.9029 5.15248 47.4509 5.15248 46.8909V45.8349C5.15248 45.2749 4.99648 44.8269 4.68448 44.4909C4.38048 44.1469 3.94848 43.9749 3.38848 43.9749C3.17248 43.9749 2.96848 44.0029 2.77648 44.0589C2.58448 44.1149 2.41648 44.1989 2.27248 44.3109C2.12848 44.4149 2.01248 44.5469 1.92448 44.7069C1.84448 44.8589 1.80448 45.0389 1.80448 45.2469V47.4789C1.80448 47.6869 1.84448 47.8709 1.92448 48.0309C2.01248 48.1829 2.12848 48.3149 2.27248 48.4269C2.41648 48.5309 2.58448 48.6109 2.77648 48.6669C2.96848 48.7229 3.17248 48.7509 3.38848 48.7509ZM7.8238 48.6429H9.6358V44.0829H7.8238V43.2669H10.5958V44.8269H10.6558C10.7838 44.3389 11.0238 43.9589 11.3758 43.6869C11.7358 43.4069 12.1918 43.2669 12.7438 43.2669H13.6078V44.2269H12.4438C11.8918 44.2269 11.4438 44.3869 11.0998 44.7069C10.7638 45.0269 10.5958 45.4469 10.5958 45.9669V48.6429H12.9958V49.4589H7.8238V48.6429ZM17.6951 49.6029C17.2631 49.6029 16.8711 49.5269 16.5191 49.3749C16.1751 49.2229 15.8791 49.0069 15.6311 48.7269C15.3911 48.4389 15.2071 48.0989 15.0791 47.7069C14.9511 47.3069 14.8871 46.8589 14.8871 46.3629C14.8871 45.8749 14.9511 45.4309 15.0791 45.0309C15.2071 44.6309 15.3911 44.2909 15.6311 44.0109C15.8791 43.7229 16.1751 43.5029 16.5191 43.3509C16.8711 43.1989 17.2631 43.1229 17.6951 43.1229C18.1271 43.1229 18.5151 43.1989 18.8591 43.3509C19.2111 43.5029 19.5071 43.7229 19.7471 44.0109C19.9951 44.2909 20.1831 44.6309 20.3111 45.0309C20.4391 45.4309 20.5031 45.8749 20.5031 46.3629C20.5031 46.8589 20.4391 47.3069 20.3111 47.7069C20.1831 48.0989 19.9951 48.4389 19.7471 48.7269C19.5071 49.0069 19.2111 49.2229 18.8591 49.3749C18.5151 49.5269 18.1271 49.6029 17.6951 49.6029ZM17.6951 48.7749C18.2311 48.7749 18.6631 48.6149 18.9911 48.2949C19.3191 47.9749 19.4831 47.4789 19.4831 46.8069V45.9189C19.4831 45.2469 19.3191 44.7509 18.9911 44.4309C18.6631 44.1109 18.2311 43.9509 17.6951 43.9509C17.1591 43.9509 16.7271 44.1109 16.3991 44.4309C16.0711 44.7509 15.9071 45.2469 15.9071 45.9189V46.8069C15.9071 47.4789 16.0711 47.9749 16.3991 48.2949C16.7271 48.6149 17.1591 48.7749 17.6951 48.7749ZM26.3904 48.4509H26.3424C25.9424 49.2189 25.3064 49.6029 24.4344 49.6029C23.6744 49.6029 23.0784 49.3189 22.6464 48.7509C22.2224 48.1829 22.0104 47.3869 22.0104 46.3629C22.0104 45.3389 22.2224 44.5429 22.6464 43.9749C23.0784 43.4069 23.6744 43.1229 24.4344 43.1229C25.3064 43.1229 25.9424 43.5069 26.3424 44.2749H26.3904V40.5789H27.3504V49.4589H26.3904V48.4509ZM24.8064 48.7509C25.0224 48.7509 25.2264 48.7229 25.4184 48.6669C25.6104 48.6109 25.7784 48.5309 25.9224 48.4269C26.0664 48.3149 26.1784 48.1829 26.2584 48.0309C26.3464 47.8709 26.3904 47.6869 26.3904 47.4789V45.2469C26.3904 45.0389 26.3464 44.8589 26.2584 44.7069C26.1784 44.5469 26.0664 44.4149 25.9224 44.3109C25.7784 44.1989 25.6104 44.1149 25.4184 44.0589C25.2264 44.0029 25.0224 43.9749 24.8064 43.9749C24.2464 43.9749 23.8104 44.1469 23.4984 44.4909C23.1944 44.8269 23.0424 45.2749 23.0424 45.8349V46.8909C23.0424 47.4509 23.1944 47.9029 23.4984 48.2469C23.8104 48.5829 24.2464 48.7509 24.8064 48.7509ZM33.5497 48.4509H33.5017C33.4377 48.6029 33.3577 48.7509 33.2617 48.8949C33.1657 49.0309 33.0457 49.1509 32.9017 49.2549C32.7657 49.3589 32.6017 49.4429 32.4097 49.5069C32.2177 49.5709 31.9937 49.6029 31.7377 49.6029C31.0897 49.6029 30.5697 49.3989 30.1777 48.9909C29.7857 48.5749 29.5897 47.9909 29.5897 47.2389V43.2669H30.5497V47.0709C30.5497 47.6389 30.6737 48.0629 30.9217 48.3429C31.1697 48.6149 31.5337 48.7509 32.0137 48.7509C32.2057 48.7509 32.3937 48.7269 32.5777 48.6789C32.7617 48.6309 32.9257 48.5589 33.0697 48.4629C33.2137 48.3669 33.3297 48.2469 33.4177 48.1029C33.5057 47.9509 33.5497 47.7709 33.5497 47.5629V43.2669H34.5097V49.4589H33.5497V48.4509ZM39.497 49.6029C39.049 49.6029 38.649 49.5269 38.297 49.3749C37.953 49.2149 37.661 48.9949 37.421 48.7149C37.181 48.4349 36.997 48.0949 36.869 47.6949C36.749 47.2949 36.689 46.8509 36.689 46.3629C36.689 45.8749 36.753 45.4309 36.881 45.0309C37.009 44.6309 37.193 44.2909 37.433 44.0109C37.673 43.7229 37.965 43.5029 38.309 43.3509C38.653 43.1989 39.045 43.1229 39.485 43.1229C40.085 43.1229 40.573 43.2549 40.949 43.5189C41.325 43.7829 41.601 44.1269 41.777 44.5509L41.009 44.9589C40.897 44.6389 40.709 44.3909 40.445 44.2149C40.189 44.0389 39.869 43.9509 39.485 43.9509C39.205 43.9509 38.953 43.9989 38.729 44.0949C38.513 44.1829 38.329 44.3109 38.177 44.4789C38.025 44.6469 37.909 44.8469 37.829 45.0789C37.757 45.3109 37.721 45.5629 37.721 45.8349V46.8909C37.721 47.1629 37.757 47.4149 37.829 47.6469C37.909 47.8789 38.025 48.0789 38.177 48.2469C38.329 48.4149 38.517 48.5469 38.741 48.6429C38.965 48.7309 39.221 48.7749 39.509 48.7749C39.925 48.7749 40.269 48.6789 40.541 48.4869C40.813 48.2949 41.029 48.0309 41.189 47.6949L41.873 48.1629C41.689 48.5789 41.401 48.9229 41.009 49.1949C40.625 49.4669 40.121 49.6029 39.497 49.6029ZM46.5844 49.6029C46.1364 49.6029 45.7324 49.5269 45.3724 49.3749C45.0204 49.2229 44.7164 49.0069 44.4604 48.7269C44.2124 48.4389 44.0204 48.0989 43.8844 47.7069C43.7484 47.3069 43.6804 46.8629 43.6804 46.3749C43.6804 45.8789 43.7484 45.4309 43.8844 45.0309C44.0284 44.6309 44.2244 44.2909 44.4724 44.0109C44.7204 43.7229 45.0164 43.5029 45.3604 43.3509C45.7124 43.1989 46.1004 43.1229 46.5244 43.1229C46.9404 43.1229 47.3164 43.1989 47.6524 43.3509C47.9964 43.5029 48.2884 43.7149 48.5284 43.9869C48.7684 44.2509 48.9524 44.5669 49.0804 44.9349C49.2084 45.3029 49.2724 45.7069 49.2724 46.1469V46.6029H44.6884V46.8909C44.6884 47.1629 44.7324 47.4149 44.8204 47.6469C44.9084 47.8789 45.0324 48.0789 45.1924 48.2469C45.3604 48.4149 45.5604 48.5469 45.7924 48.6429C46.0324 48.7309 46.2964 48.7749 46.5844 48.7749C47.0004 48.7749 47.3604 48.6789 47.6644 48.4869C47.9684 48.2949 48.2004 48.0309 48.3604 47.6949L49.0684 48.1749C48.8844 48.5909 48.5764 48.9349 48.1444 49.2069C47.7204 49.4709 47.2004 49.6029 46.5844 49.6029ZM46.5244 43.9149C46.2604 43.9149 46.0164 43.9629 45.7924 44.0589C45.5684 44.1549 45.3724 44.2869 45.2044 44.4549C45.0444 44.6229 44.9164 44.8229 44.8204 45.0549C44.7324 45.2789 44.6884 45.5269 44.6884 45.7989V45.8829H48.2404V45.7509C48.2404 45.4789 48.1964 45.2309 48.1084 45.0069C48.0284 44.7829 47.9124 44.5909 47.7604 44.4309C47.6164 44.2629 47.4364 44.1349 47.2204 44.0469C47.0124 43.9589 46.7804 43.9149 46.5244 43.9149ZM50.9957 48.6429H52.8077V44.0829H50.9957V43.2669H53.7677V44.8269H53.8277C53.9557 44.3389 54.1957 43.9589 54.5477 43.6869C54.9077 43.4069 55.3637 43.2669 55.9157 43.2669H56.7797V44.2269H55.6157C55.0637 44.2269 54.6157 44.3869 54.2717 44.7069C53.9357 45.0269 53.7677 45.4469 53.7677 45.9669V48.6429H56.1677V49.4589H50.9957V48.6429Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col-lg-4 col-12">
                            <p class="add-content-title text-center">
                              DUO ARTIST
                            </p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M108.505 108.505V217.01C48.5811 217 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                fill="none"
                                height="217"
                                style="position: absolute; top: 0; bottom: 0; right: 0; margin: auto;"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M0.504883 108.505V0C60.4286 0 109.01 48.5811 109.01 108.505C109.01 168.429 60.4286 217.01 0.504883 217.01V108.505Z"
                                  fill="#75707B"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="50"
                                viewBox="0 0 93 50"
                                width="93"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M34.5285 1.95886H30.7845L30.5445 5.16286H30.6285C30.8365 4.88286 31.0685 4.66286 31.3245 4.50286C31.5805 4.33486 31.9325 4.25086 32.3805 4.25086C32.7485 4.25086 33.0845 4.31086 33.3885 4.43086C33.7005 4.54286 33.9685 4.71086 34.1925 4.93486C34.4165 5.15886 34.5925 5.43086 34.7205 5.75086C34.8485 6.06286 34.9125 6.42286 34.9125 6.83086C34.9125 7.23886 34.8485 7.61486 34.7205 7.95886C34.5925 8.29486 34.4045 8.58686 34.1565 8.83486C33.9085 9.07486 33.6085 9.26286 33.2565 9.39886C32.9045 9.53486 32.5045 9.60286 32.0565 9.60286C31.7045 9.60286 31.3885 9.56286 31.1085 9.48286C30.8365 9.40286 30.5925 9.29486 30.3765 9.15886C30.1685 9.02286 29.9845 8.87086 29.8245 8.70286C29.6645 8.53486 29.5205 8.35886 29.3925 8.17486L30.1485 7.59886C30.2605 7.76686 30.3725 7.91886 30.4845 8.05486C30.6045 8.19086 30.7405 8.31086 30.8925 8.41486C31.0445 8.51086 31.2165 8.58686 31.4085 8.64286C31.6005 8.69886 31.8245 8.72686 32.0805 8.72686C32.6565 8.72686 33.0965 8.57086 33.4005 8.25886C33.7125 7.94686 33.8685 7.51486 33.8685 6.96286V6.86686C33.8685 6.31486 33.7125 5.88286 33.4005 5.57086C33.0885 5.25886 32.6405 5.10286 32.0565 5.10286C31.6565 5.10286 31.3445 5.17086 31.1205 5.30686C30.9045 5.44286 30.7045 5.61086 30.5205 5.81086L29.6685 5.69086L29.9685 1.08286H34.5285V1.95886ZM39.3118 9.60286C38.7998 9.60286 38.3598 9.50686 37.9918 9.31486C37.6238 9.11486 37.3198 8.83086 37.0798 8.46286C36.8398 8.09486 36.6638 7.64286 36.5518 7.10686C36.4398 6.57086 36.3838 5.95886 36.3838 5.27086C36.3838 4.59086 36.4398 3.98286 36.5518 3.44686C36.6638 2.90286 36.8398 2.44686 37.0798 2.07886C37.3198 1.71086 37.6238 1.43086 37.9918 1.23886C38.3598 1.03886 38.7998 0.938862 39.3118 0.938862C39.8238 0.938862 40.2638 1.03886 40.6318 1.23886C40.9998 1.43086 41.3038 1.71086 41.5438 2.07886C41.7838 2.44686 41.9598 2.90286 42.0718 3.44686C42.1838 3.98286 42.2398 4.59086 42.2398 5.27086C42.2398 5.95886 42.1838 6.57086 42.0718 7.10686C41.9598 7.64286 41.7838 8.09486 41.5438 8.46286C41.3038 8.83086 40.9998 9.11486 40.6318 9.31486C40.2638 9.50686 39.8238 9.60286 39.3118 9.60286ZM39.3118 8.72686C39.6478 8.72686 39.9358 8.66286 40.1758 8.53486C40.4158 8.39886 40.6078 8.21086 40.7518 7.97086C40.9038 7.73086 41.0158 7.44286 41.0878 7.10686C41.1598 6.76286 41.1958 6.37886 41.1958 5.95486V4.58686C41.1958 4.17086 41.1598 3.79086 41.0878 3.44686C41.0158 3.10286 40.9038 2.81086 40.7518 2.57086C40.6078 2.33086 40.4158 2.14686 40.1758 2.01886C39.9358 1.88286 39.6478 1.81486 39.3118 1.81486C38.9758 1.81486 38.6878 1.88286 38.4478 2.01886C38.2078 2.14686 38.0118 2.33086 37.8598 2.57086C37.7158 2.81086 37.6078 3.10286 37.5358 3.44686C37.4638 3.79086 37.4278 4.17086 37.4278 4.58686V5.95486C37.4278 6.37886 37.4638 6.76286 37.5358 7.10686C37.6078 7.44286 37.7158 7.73086 37.8598 7.97086C38.0118 8.21086 38.2078 8.39886 38.4478 8.53486C38.6878 8.66286 38.9758 8.72686 39.3118 8.72686ZM39.3118 5.97886C39.0318 5.97886 38.8358 5.92286 38.7238 5.81086C38.6198 5.69886 38.5678 5.56286 38.5678 5.40286V5.13886C38.5678 4.97886 38.6198 4.84286 38.7238 4.73086C38.8358 4.61886 39.0318 4.56286 39.3118 4.56286C39.5918 4.56286 39.7838 4.61886 39.8878 4.73086C39.9998 4.84286 40.0558 4.97886 40.0558 5.13886V5.40286C40.0558 5.56286 39.9998 5.69886 39.8878 5.81086C39.7838 5.92286 39.5918 5.97886 39.3118 5.97886ZM43.9871 11.1149L48.1631 0.338862H49.0271L44.8511 11.1149H43.9871ZM56.1144 1.95886H52.3704L52.1304 5.16286H52.2144C52.4224 4.88286 52.6544 4.66286 52.9104 4.50286C53.1664 4.33486 53.5184 4.25086 53.9664 4.25086C54.3344 4.25086 54.6704 4.31086 54.9744 4.43086C55.2864 4.54286 55.5544 4.71086 55.7784 4.93486C56.0024 5.15886 56.1784 5.43086 56.3064 5.75086C56.4344 6.06286 56.4984 6.42286 56.4984 6.83086C56.4984 7.23886 56.4344 7.61486 56.3064 7.95886C56.1784 8.29486 55.9904 8.58686 55.7424 8.83486C55.4944 9.07486 55.1944 9.26286 54.8424 9.39886C54.4904 9.53486 54.0904 9.60286 53.6424 9.60286C53.2904 9.60286 52.9744 9.56286 52.6944 9.48286C52.4224 9.40286 52.1784 9.29486 51.9624 9.15886C51.7544 9.02286 51.5704 8.87086 51.4104 8.70286C51.2504 8.53486 51.1064 8.35886 50.9784 8.17486L51.7344 7.59886C51.8464 7.76686 51.9584 7.91886 52.0704 8.05486C52.1904 8.19086 52.3264 8.31086 52.4784 8.41486C52.6304 8.51086 52.8024 8.58686 52.9944 8.64286C53.1864 8.69886 53.4104 8.72686 53.6664 8.72686C54.2424 8.72686 54.6824 8.57086 54.9864 8.25886C55.2984 7.94686 55.4544 7.51486 55.4544 6.96286V6.86686C55.4544 6.31486 55.2984 5.88286 54.9864 5.57086C54.6744 5.25886 54.2264 5.10286 53.6424 5.10286C53.2424 5.10286 52.9304 5.17086 52.7064 5.30686C52.4904 5.44286 52.2904 5.61086 52.1064 5.81086L51.2544 5.69086L51.5544 1.08286H56.1144V1.95886ZM60.8977 9.60286C60.3857 9.60286 59.9457 9.50686 59.5777 9.31486C59.2097 9.11486 58.9057 8.83086 58.6657 8.46286C58.4257 8.09486 58.2497 7.64286 58.1377 7.10686C58.0257 6.57086 57.9697 5.95886 57.9697 5.27086C57.9697 4.59086 58.0257 3.98286 58.1377 3.44686C58.2497 2.90286 58.4257 2.44686 58.6657 2.07886C58.9057 1.71086 59.2097 1.43086 59.5777 1.23886C59.9457 1.03886 60.3857 0.938862 60.8977 0.938862C61.4097 0.938862 61.8497 1.03886 62.2177 1.23886C62.5857 1.43086 62.8897 1.71086 63.1297 2.07886C63.3697 2.44686 63.5457 2.90286 63.6577 3.44686C63.7697 3.98286 63.8257 4.59086 63.8257 5.27086C63.8257 5.95886 63.7697 6.57086 63.6577 7.10686C63.5457 7.64286 63.3697 8.09486 63.1297 8.46286C62.8897 8.83086 62.5857 9.11486 62.2177 9.31486C61.8497 9.50686 61.4097 9.60286 60.8977 9.60286ZM60.8977 8.72686C61.2337 8.72686 61.5217 8.66286 61.7617 8.53486C62.0017 8.39886 62.1937 8.21086 62.3377 7.97086C62.4897 7.73086 62.6017 7.44286 62.6737 7.10686C62.7457 6.76286 62.7817 6.37886 62.7817 5.95486V4.58686C62.7817 4.17086 62.7457 3.79086 62.6737 3.44686C62.6017 3.10286 62.4897 2.81086 62.3377 2.57086C62.1937 2.33086 62.0017 2.14686 61.7617 2.01886C61.5217 1.88286 61.2337 1.81486 60.8977 1.81486C60.5617 1.81486 60.2737 1.88286 60.0337 2.01886C59.7937 2.14686 59.5977 2.33086 59.4457 2.57086C59.3017 2.81086 59.1937 3.10286 59.1217 3.44686C59.0497 3.79086 59.0137 4.17086 59.0137 4.58686V5.95486C59.0137 6.37886 59.0497 6.76286 59.1217 7.10686C59.1937 7.44286 59.3017 7.73086 59.4457 7.97086C59.5977 8.21086 59.7937 8.39886 60.0337 8.53486C60.2737 8.66286 60.5617 8.72686 60.8977 8.72686ZM60.8977 5.97886C60.6177 5.97886 60.4217 5.92286 60.3097 5.81086C60.2057 5.69886 60.1537 5.56286 60.1537 5.40286V5.13886C60.1537 4.97886 60.2057 4.84286 60.3097 4.73086C60.4217 4.61886 60.6177 4.56286 60.8977 4.56286C61.1777 4.56286 61.3697 4.61886 61.4737 4.73086C61.5857 4.84286 61.6417 4.97886 61.6417 5.13886V5.40286C61.6417 5.56286 61.5857 5.69886 61.4737 5.81086C61.3697 5.92286 61.1777 5.97886 60.8977 5.97886ZM3.31124 29.6029C2.55924 29.6029 1.94324 29.4669 1.46324 29.1949C0.983245 28.9149 0.587245 28.5589 0.275245 28.1269L1.00724 27.5269C1.33524 27.9349 1.67924 28.2389 2.03924 28.4389C2.40724 28.6389 2.84324 28.7389 3.34725 28.7389C3.95524 28.7389 4.41924 28.5989 4.73925 28.3189C5.05924 28.0389 5.21924 27.6469 5.21924 27.1429C5.21924 26.7349 5.10325 26.4189 4.87125 26.1949C4.63925 25.9629 4.23524 25.7989 3.65925 25.7029L2.72324 25.5469C2.31524 25.4749 1.97124 25.3669 1.69124 25.2229C1.41924 25.0789 1.19924 24.9069 1.03124 24.7069C0.863245 24.4989 0.743245 24.2749 0.671245 24.0349C0.599245 23.7869 0.563245 23.5309 0.563245 23.2669C0.563245 22.4989 0.815245 21.9189 1.31924 21.5269C1.82324 21.1349 2.50324 20.9389 3.35924 20.9389C4.03124 20.9389 4.59524 21.0509 5.05124 21.2749C5.51525 21.4989 5.88725 21.8149 6.16724 22.2229L5.45925 22.8349C5.22724 22.5309 4.94724 22.2829 4.61924 22.0909C4.29124 21.8989 3.86725 21.8029 3.34725 21.8029C2.77924 21.8029 2.34324 21.9229 2.03924 22.1629C1.73524 22.4029 1.58324 22.7629 1.58324 23.2429C1.58324 23.6189 1.69524 23.9269 1.91924 24.1669C2.15124 24.3989 2.56324 24.5669 3.15525 24.6709L4.05524 24.8269C4.46324 24.8989 4.80724 25.0069 5.08724 25.1509C5.36725 25.2949 5.59125 25.4669 5.75925 25.6669C5.93525 25.8669 6.05925 26.0909 6.13125 26.3389C6.20325 26.5869 6.23925 26.8469 6.23925 27.1189C6.23925 27.8949 5.98325 28.5029 5.47124 28.9429C4.96724 29.3829 4.24724 29.6029 3.31124 29.6029ZM8.07056 23.2669H9.03056V24.2749H9.07856C9.47856 23.5069 10.1146 23.1229 10.9866 23.1229C11.7466 23.1229 12.3386 23.4069 12.7626 23.9749C13.1946 24.5429 13.4106 25.3389 13.4106 26.3629C13.4106 27.3869 13.1946 28.1829 12.7626 28.7509C12.3386 29.3189 11.7466 29.6029 10.9866 29.6029C10.1146 29.6029 9.47856 29.2189 9.07856 28.4509H9.03056V31.8589H8.07056V23.2669ZM10.6146 28.7509C11.1746 28.7509 11.6066 28.5829 11.9106 28.2469C12.2226 27.9029 12.3786 27.4509 12.3786 26.8909V25.8349C12.3786 25.2749 12.2226 24.8269 11.9106 24.4909C11.6066 24.1469 11.1746 23.9749 10.6146 23.9749C10.3986 23.9749 10.1946 24.0029 10.0026 24.0589C9.81056 24.1149 9.64256 24.1989 9.49856 24.3109C9.35456 24.4149 9.23856 24.5469 9.15056 24.7069C9.07056 24.8589 9.03056 25.0389 9.03056 25.2469V27.4789C9.03056 27.6869 9.07056 27.8709 9.15056 28.0309C9.23856 28.1829 9.35456 28.3149 9.49856 28.4269C9.64256 28.5309 9.81056 28.6109 10.0026 28.6669C10.1946 28.7229 10.3986 28.7509 10.6146 28.7509ZM15.0859 28.6429H17.2459V21.3949H15.0859V20.5789H18.2059V28.6429H20.3659V29.4589H15.0859V28.6429ZM25.3052 21.8989C25.0252 21.8989 24.8292 21.8429 24.7172 21.7309C24.6052 21.6109 24.5492 21.4629 24.5492 21.2869V21.0949C24.5492 20.9189 24.6052 20.7749 24.7172 20.6629C24.8292 20.5429 25.0252 20.4829 25.3052 20.4829C25.5852 20.4829 25.7812 20.5429 25.8932 20.6629C26.0052 20.7749 26.0612 20.9189 26.0612 21.0949V21.2869C26.0612 21.4629 26.0052 21.6109 25.8932 21.7309C25.7812 21.8429 25.5852 21.8989 25.3052 21.8989ZM22.5932 28.6429H24.8252V24.0829H22.5932V23.2669H25.7852V28.6429H27.8732V29.4589H22.5932V28.6429ZM32.4165 29.4589C31.9445 29.4589 31.5965 29.3269 31.3725 29.0629C31.1565 28.7989 31.0485 28.4589 31.0485 28.0429V24.0829H28.9845V23.2669H30.5205C30.7285 23.2669 30.8725 23.2269 30.9525 23.1469C31.0405 23.0589 31.0845 22.9109 31.0845 22.7029V21.0829H32.0085V23.2669H34.8285V24.0829H32.0085V28.6429H34.8285V29.4589H32.4165ZM44.0471 20.5789H45.0071V24.2749H45.0551C45.4551 23.5069 46.0911 23.1229 46.9631 23.1229C47.7231 23.1229 48.3151 23.4069 48.7391 23.9749C49.1711 24.5429 49.3871 25.3389 49.3871 26.3629C49.3871 27.3869 49.1711 28.1829 48.7391 28.7509C48.3151 29.3189 47.7231 29.6029 46.9631 29.6029C46.0911 29.6029 45.4551 29.2189 45.0551 28.4509H45.0071V29.4589H44.0471V20.5789ZM46.5911 28.7509C47.1511 28.7509 47.5831 28.5829 47.8871 28.2469C48.1991 27.9029 48.3551 27.4509 48.3551 26.8909V25.8349C48.3551 25.2749 48.1991 24.8269 47.8871 24.4909C47.5831 24.1469 47.1511 23.9749 46.5911 23.9749C46.3751 23.9749 46.1711 24.0029 45.9791 24.0589C45.7871 24.1149 45.6191 24.1989 45.4751 24.3109C45.3311 24.4149 45.2151 24.5469 45.1271 24.7069C45.0471 24.8589 45.0071 25.0389 45.0071 25.2469V27.4789C45.0071 27.6869 45.0471 27.8709 45.1271 28.0309C45.2151 28.1829 45.3311 28.3149 45.4751 28.4269C45.6191 28.5309 45.7871 28.6109 45.9791 28.6669C46.1711 28.7229 46.3751 28.7509 46.5911 28.7509ZM53.8104 29.6029C53.3624 29.6029 52.9584 29.5269 52.5984 29.3749C52.2464 29.2229 51.9424 29.0069 51.6864 28.7269C51.4384 28.4389 51.2464 28.0989 51.1104 27.7069C50.9744 27.3069 50.9064 26.8629 50.9064 26.3749C50.9064 25.8789 50.9744 25.4309 51.1104 25.0309C51.2544 24.6309 51.4504 24.2909 51.6984 24.0109C51.9464 23.7229 52.2424 23.5029 52.5864 23.3509C52.9384 23.1989 53.3264 23.1229 53.7504 23.1229C54.1664 23.1229 54.5424 23.1989 54.8784 23.3509C55.2224 23.5029 55.5144 23.7149 55.7544 23.9869C55.9944 24.2509 56.1784 24.5669 56.3064 24.9349C56.4344 25.3029 56.4984 25.7069 56.4984 26.1469V26.6029H51.9144V26.8909C51.9144 27.1629 51.9584 27.4149 52.0464 27.6469C52.1344 27.8789 52.2584 28.0789 52.4184 28.2469C52.5864 28.4149 52.7864 28.5469 53.0184 28.6429C53.2584 28.7309 53.5224 28.7749 53.8104 28.7749C54.2264 28.7749 54.5864 28.6789 54.8904 28.4869C55.1944 28.2949 55.4264 28.0309 55.5864 27.6949L56.2944 28.1749C56.1104 28.5909 55.8024 28.9349 55.3704 29.2069C54.9464 29.4709 54.4264 29.6029 53.8104 29.6029ZM53.7504 23.9149C53.4864 23.9149 53.2424 23.9629 53.0184 24.0589C52.7944 24.1549 52.5984 24.2869 52.4304 24.4549C52.2704 24.6229 52.1424 24.8229 52.0464 25.0549C51.9584 25.2789 51.9144 25.5269 51.9144 25.7989V25.8829H55.4664V25.7509C55.4664 25.4789 55.4224 25.2309 55.3344 25.0069C55.2544 24.7829 55.1384 24.5909 54.9864 24.4309C54.8424 24.2629 54.6624 24.1349 54.4464 24.0469C54.2384 23.9589 54.0064 23.9149 53.7504 23.9149ZM61.1977 29.4589C60.7257 29.4589 60.3777 29.3269 60.1537 29.0629C59.9377 28.7989 59.8297 28.4589 59.8297 28.0429V24.0829H57.7657V23.2669H59.3017C59.5097 23.2669 59.6537 23.2269 59.7337 23.1469C59.8217 23.0589 59.8657 22.9109 59.8657 22.7029V21.0829H60.7897V23.2669H63.6097V24.0829H60.7897V28.6429H63.6097V29.4589H61.1977ZM64.8531 23.2669H65.7051L66.4131 28.6189H66.5211L67.5771 23.2669H68.6331L69.6891 28.6189H69.7971L70.5051 23.2669H71.3331L70.3851 29.4589H69.1371L68.1531 24.2749H68.0571L67.0491 29.4589H65.8011L64.8531 23.2669ZM75.3964 29.6029C74.9484 29.6029 74.5444 29.5269 74.1844 29.3749C73.8324 29.2229 73.5284 29.0069 73.2724 28.7269C73.0244 28.4389 72.8324 28.0989 72.6964 27.7069C72.5604 27.3069 72.4924 26.8629 72.4924 26.3749C72.4924 25.8789 72.5604 25.4309 72.6964 25.0309C72.8404 24.6309 73.0364 24.2909 73.2844 24.0109C73.5324 23.7229 73.8284 23.5029 74.1724 23.3509C74.5244 23.1989 74.9124 23.1229 75.3364 23.1229C75.7524 23.1229 76.1284 23.1989 76.4644 23.3509C76.8084 23.5029 77.1004 23.7149 77.3404 23.9869C77.5804 24.2509 77.7644 24.5669 77.8924 24.9349C78.0204 25.3029 78.0844 25.7069 78.0844 26.1469V26.6029H73.5004V26.8909C73.5004 27.1629 73.5444 27.4149 73.6324 27.6469C73.7204 27.8789 73.8444 28.0789 74.0044 28.2469C74.1724 28.4149 74.3724 28.5469 74.6044 28.6429C74.8444 28.7309 75.1084 28.7749 75.3964 28.7749C75.8124 28.7749 76.1724 28.6789 76.4764 28.4869C76.7804 28.2949 77.0124 28.0309 77.1724 27.6949L77.8804 28.1749C77.6964 28.5909 77.3884 28.9349 76.9564 29.2069C76.5324 29.4709 76.0124 29.6029 75.3964 29.6029ZM75.3364 23.9149C75.0724 23.9149 74.8284 23.9629 74.6044 24.0589C74.3804 24.1549 74.1844 24.2869 74.0164 24.4549C73.8564 24.6229 73.7284 24.8229 73.6324 25.0549C73.5444 25.2789 73.5004 25.5269 73.5004 25.7989V25.8829H77.0524V25.7509C77.0524 25.4789 77.0084 25.2309 76.9204 25.0069C76.8404 24.7829 76.7244 24.5909 76.5724 24.4309C76.4284 24.2629 76.2484 24.1349 76.0324 24.0469C75.8244 23.9589 75.5924 23.9149 75.3364 23.9149ZM82.5917 29.6029C82.1437 29.6029 81.7397 29.5269 81.3797 29.3749C81.0277 29.2229 80.7237 29.0069 80.4677 28.7269C80.2197 28.4389 80.0277 28.0989 79.8917 27.7069C79.7557 27.3069 79.6877 26.8629 79.6877 26.3749C79.6877 25.8789 79.7557 25.4309 79.8917 25.0309C80.0357 24.6309 80.2317 24.2909 80.4797 24.0109C80.7277 23.7229 81.0237 23.5029 81.3677 23.3509C81.7197 23.1989 82.1077 23.1229 82.5317 23.1229C82.9477 23.1229 83.3237 23.1989 83.6597 23.3509C84.0037 23.5029 84.2957 23.7149 84.5357 23.9869C84.7757 24.2509 84.9597 24.5669 85.0877 24.9349C85.2157 25.3029 85.2797 25.7069 85.2797 26.1469V26.6029H80.6957V26.8909C80.6957 27.1629 80.7397 27.4149 80.8277 27.6469C80.9157 27.8789 81.0397 28.0789 81.1997 28.2469C81.3677 28.4149 81.5677 28.5469 81.7997 28.6429C82.0397 28.7309 82.3037 28.7749 82.5917 28.7749C83.0077 28.7749 83.3677 28.6789 83.6717 28.4869C83.9757 28.2949 84.2077 28.0309 84.3677 27.6949L85.0757 28.1749C84.8917 28.5909 84.5837 28.9349 84.1517 29.2069C83.7277 29.4709 83.2077 29.6029 82.5917 29.6029ZM82.5317 23.9149C82.2677 23.9149 82.0237 23.9629 81.7997 24.0589C81.5757 24.1549 81.3797 24.2869 81.2117 24.4549C81.0517 24.6229 80.9237 24.8229 80.8277 25.0549C80.7397 25.2789 80.6957 25.5269 80.6957 25.7989V25.8829H84.2477V25.7509C84.2477 25.4789 84.2037 25.2309 84.1157 25.0069C84.0357 24.7829 83.9197 24.5909 83.7677 24.4309C83.6237 24.2629 83.4437 24.1349 83.2277 24.0469C83.0197 23.9589 82.7877 23.9149 82.5317 23.9149ZM87.255 29.4589V23.2669H88.215V24.2749H88.263C88.327 24.1229 88.407 23.9789 88.503 23.8429C88.599 23.6989 88.715 23.5749 88.851 23.4709C88.995 23.3669 89.163 23.2829 89.355 23.2189C89.547 23.1549 89.771 23.1229 90.027 23.1229C90.675 23.1229 91.195 23.3309 91.587 23.7469C91.979 24.1549 92.175 24.7349 92.175 25.4869V29.4589H91.215V25.6549C91.215 25.0869 91.091 24.6669 90.843 24.3949C90.595 24.1149 90.231 23.9749 89.751 23.9749C89.559 23.9749 89.371 23.9989 89.187 24.0469C89.003 24.0949 88.839 24.1669 88.695 24.2629C88.551 24.3589 88.435 24.4829 88.347 24.6349C88.259 24.7869 88.215 24.9629 88.215 25.1629V29.4589H87.255ZM27.2612 49.4589C26.8852 49.4589 26.6172 49.3629 26.4572 49.1709C26.2972 48.9789 26.1972 48.7389 26.1572 48.4509H26.0972C25.9612 48.8109 25.7412 49.0949 25.4372 49.3029C25.1412 49.5029 24.7412 49.6029 24.2372 49.6029C23.5892 49.6029 23.0732 49.4349 22.6892 49.0989C22.3052 48.7629 22.1132 48.3029 22.1132 47.7189C22.1132 47.1429 22.3212 46.6989 22.7372 46.3869C23.1612 46.0749 23.8412 45.9189 24.7772 45.9189H26.0972V45.3069C26.0972 44.8509 25.9692 44.5109 25.7132 44.2869C25.4572 44.0549 25.0932 43.9389 24.6212 43.9389C24.2052 43.9389 23.8652 44.0229 23.6012 44.1909C23.3372 44.3509 23.1252 44.5709 22.9652 44.8509L22.3172 44.3709C22.3972 44.2109 22.5052 44.0549 22.6412 43.9029C22.7772 43.7509 22.9452 43.6189 23.1452 43.5069C23.3452 43.3869 23.5732 43.2949 23.8292 43.2309C24.0852 43.1589 24.3692 43.1229 24.6812 43.1229C25.4092 43.1229 25.9852 43.3069 26.4092 43.6749C26.8412 44.0429 27.0572 44.5549 27.0572 45.2109V48.6189H27.9212V49.4589H27.2612ZM24.4052 48.7989C24.6532 48.7989 24.8772 48.7709 25.0772 48.7149C25.2852 48.6509 25.4652 48.5709 25.6172 48.4749C25.7692 48.3709 25.8852 48.2509 25.9652 48.1149C26.0532 47.9709 26.0972 47.8189 26.0972 47.6589V46.6389H24.7772C24.2012 46.6389 23.7812 46.7189 23.5172 46.8789C23.2532 47.0389 23.1212 47.2709 23.1212 47.5749V47.8269C23.1212 48.1469 23.2332 48.3909 23.4572 48.5589C23.6892 48.7189 24.0052 48.7989 24.4052 48.7989ZM29.4405 48.6429H31.2525V44.0829H29.4405V43.2669H32.2125V44.8269H32.2725C32.4005 44.3389 32.6405 43.9589 32.9925 43.6869C33.3525 43.4069 33.8085 43.2669 34.3605 43.2669H35.2245V44.2269H34.0605C33.5085 44.2269 33.0605 44.3869 32.7165 44.7069C32.3805 45.0269 32.2125 45.4469 32.2125 45.9669V48.6429H34.6125V49.4589H29.4405V48.6429ZM39.6118 49.4589C39.1398 49.4589 38.7918 49.3269 38.5678 49.0629C38.3518 48.7989 38.2438 48.4589 38.2438 48.0429V44.0829H36.1798V43.2669H37.7158C37.9238 43.2669 38.0678 43.2269 38.1478 43.1469C38.2358 43.0589 38.2798 42.9109 38.2798 42.7029V41.0829H39.2038V43.2669H42.0238V44.0829H39.2038V48.6429H42.0238V49.4589H39.6118ZM46.8911 41.8989C46.6111 41.8989 46.4151 41.8429 46.3031 41.7309C46.1911 41.6109 46.1351 41.4629 46.1351 41.2869V41.0949C46.1351 40.9189 46.1911 40.7749 46.3031 40.6629C46.4151 40.5429 46.6111 40.4829 46.8911 40.4829C47.1711 40.4829 47.3671 40.5429 47.4791 40.6629C47.5911 40.7749 47.6471 40.9189 47.6471 41.0949V41.2869C47.6471 41.4629 47.5911 41.6109 47.4791 41.7309C47.3671 41.8429 47.1711 41.8989 46.8911 41.8989ZM44.1791 48.6429H46.4111V44.0829H44.1791V43.2669H47.3711V48.6429H49.4591V49.4589H44.1791V48.6429ZM53.7744 49.6029C53.1264 49.6029 52.5664 49.4949 52.0944 49.2789C51.6304 49.0549 51.2344 48.7589 50.9064 48.3909L51.5544 47.8269C51.8504 48.1389 52.1744 48.3789 52.5264 48.5469C52.8784 48.7149 53.3024 48.7989 53.7984 48.7989C54.2784 48.7989 54.6704 48.7149 54.9744 48.5469C55.2864 48.3709 55.4424 48.0989 55.4424 47.7309C55.4424 47.5709 55.4104 47.4389 55.3464 47.3349C55.2904 47.2229 55.2104 47.1349 55.1064 47.0709C55.0024 47.0069 54.8864 46.9589 54.7584 46.9269C54.6304 46.8869 54.4944 46.8549 54.3504 46.8309L53.3784 46.6869C53.1624 46.6549 52.9264 46.6109 52.6704 46.5549C52.4224 46.4989 52.1944 46.4109 51.9864 46.2909C51.7784 46.1629 51.6024 45.9949 51.4584 45.7869C51.3224 45.5789 51.2544 45.3069 51.2544 44.9709C51.2544 44.6589 51.3144 44.3909 51.4344 44.1669C51.5624 43.9349 51.7384 43.7429 51.9624 43.5909C52.1864 43.4309 52.4504 43.3149 52.7544 43.2429C53.0584 43.1629 53.3904 43.1229 53.7504 43.1229C54.3104 43.1229 54.7944 43.2109 55.2024 43.3869C55.6184 43.5629 55.9744 43.8069 56.2704 44.1189L55.6464 44.7069C55.5744 44.6189 55.4824 44.5309 55.3704 44.4429C55.2664 44.3469 55.1344 44.2629 54.9744 44.1909C54.8224 44.1109 54.6424 44.0469 54.4344 43.9989C54.2264 43.9509 53.9864 43.9269 53.7144 43.9269C53.2264 43.9269 52.8504 44.0109 52.5864 44.1789C52.3304 44.3469 52.2024 44.5909 52.2024 44.9109C52.2024 45.0709 52.2304 45.2069 52.2864 45.3189C52.3504 45.4229 52.4344 45.5069 52.5384 45.5709C52.6424 45.6349 52.7584 45.6869 52.8864 45.7269C53.0224 45.7589 53.1584 45.7869 53.2944 45.8109L54.2664 45.9549C54.4904 45.9869 54.7264 46.0309 54.9744 46.0869C55.2224 46.1429 55.4504 46.2349 55.6584 46.3629C55.8664 46.4829 56.0384 46.6469 56.1744 46.8549C56.3184 47.0629 56.3904 47.3349 56.3904 47.6709C56.3904 48.2869 56.1504 48.7629 55.6704 49.0989C55.1984 49.4349 54.5664 49.6029 53.7744 49.6029ZM61.1977 49.4589C60.7257 49.4589 60.3777 49.3269 60.1537 49.0629C59.9377 48.7989 59.8297 48.4589 59.8297 48.0429V44.0829H57.7657V43.2669H59.3017C59.5097 43.2669 59.6537 43.2269 59.7337 43.1469C59.8217 43.0589 59.8657 42.9109 59.8657 42.7029V41.0829H60.7897V43.2669H63.6097V44.0829H60.7897V48.6429H63.6097V49.4589H61.1977ZM68.1651 49.6029C67.5171 49.6029 66.9571 49.4949 66.4851 49.2789C66.0211 49.0549 65.6251 48.7589 65.2971 48.3909L65.9451 47.8269C66.2411 48.1389 66.5651 48.3789 66.9171 48.5469C67.2691 48.7149 67.6931 48.7989 68.1891 48.7989C68.6691 48.7989 69.0611 48.7149 69.3651 48.5469C69.6771 48.3709 69.8331 48.0989 69.8331 47.7309C69.8331 47.5709 69.8011 47.4389 69.7371 47.3349C69.6811 47.2229 69.6011 47.1349 69.4971 47.0709C69.3931 47.0069 69.2771 46.9589 69.1491 46.9269C69.0211 46.8869 68.8851 46.8549 68.7411 46.8309L67.7691 46.6869C67.5531 46.6549 67.3171 46.6109 67.0611 46.5549C66.8131 46.4989 66.5851 46.4109 66.3771 46.2909C66.1691 46.1629 65.9931 45.9949 65.8491 45.7869C65.7131 45.5789 65.6451 45.3069 65.6451 44.9709C65.6451 44.6589 65.7051 44.3909 65.8251 44.1669C65.9531 43.9349 66.1291 43.7429 66.3531 43.5909C66.5771 43.4309 66.8411 43.3149 67.1451 43.2429C67.4491 43.1629 67.7811 43.1229 68.1411 43.1229C68.7011 43.1229 69.1851 43.2109 69.5931 43.3869C70.0091 43.5629 70.3651 43.8069 70.6611 44.1189L70.0371 44.7069C69.9651 44.6189 69.8731 44.5309 69.7611 44.4429C69.6571 44.3469 69.5251 44.2629 69.3651 44.1909C69.2131 44.1109 69.0331 44.0469 68.8251 43.9989C68.6171 43.9509 68.3771 43.9269 68.1051 43.9269C67.6171 43.9269 67.2411 44.0109 66.9771 44.1789C66.7211 44.3469 66.5931 44.5909 66.5931 44.9109C66.5931 45.0709 66.6211 45.2069 66.6771 45.3189C66.7411 45.4229 66.8251 45.5069 66.9291 45.5709C67.0331 45.6349 67.1491 45.6869 67.2771 45.7269C67.4131 45.7589 67.5491 45.7869 67.6851 45.8109L68.6571 45.9549C68.8811 45.9869 69.1171 46.0309 69.3651 46.0869C69.6131 46.1429 69.8411 46.2349 70.0491 46.3629C70.2571 46.4829 70.4291 46.6469 70.5651 46.8549C70.7091 47.0629 70.7811 47.3349 70.7811 47.6709C70.7811 48.2869 70.5411 48.7629 70.0611 49.0989C69.5891 49.4349 68.9571 49.6029 68.1651 49.6029Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col-lg-4 col-12">
                            <p class="add-content-title text-center">REMIXES</p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M108.505 108.505V217.01C48.5811 217 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                fill="none"
                                height="217"
                                style="position: absolute; top: 0; bottom: 0; right: 0; margin: auto;"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M0.504883 108.505V0C60.4286 0 109.01 48.5811 109.01 108.505C109.01 168.429 60.4286 217.01 0.504883 217.01V108.505Z"
                                  fill="#75707B"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="90"
                                viewBox="0 0 93 90"
                                width="93"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M34.519 1.96851H30.775L30.535 5.17251H30.619C30.827 4.89251 31.059 4.67251 31.315 4.51251C31.571 4.34451 31.923 4.26051 32.371 4.26051C32.739 4.26051 33.075 4.32051 33.379 4.44051C33.691 4.55251 33.959 4.72051 34.183 4.94451C34.407 5.16851 34.583 5.44051 34.711 5.76051C34.839 6.07251 34.903 6.43251 34.903 6.84051C34.903 7.24851 34.839 7.62451 34.711 7.96851C34.583 8.30451 34.395 8.59651 34.147 8.84451C33.899 9.08451 33.599 9.27251 33.247 9.40851C32.895 9.54451 32.495 9.61251 32.047 9.61251C31.695 9.61251 31.379 9.57251 31.099 9.49251C30.827 9.41251 30.583 9.30451 30.367 9.16851C30.159 9.03251 29.975 8.88051 29.815 8.71251C29.655 8.54451 29.511 8.36851 29.383 8.18451L30.139 7.60851C30.251 7.77651 30.363 7.92851 30.475 8.06451C30.595 8.20051 30.731 8.32051 30.883 8.42451C31.035 8.52051 31.207 8.59651 31.399 8.65251C31.591 8.70851 31.815 8.73651 32.071 8.73651C32.647 8.73651 33.087 8.58051 33.391 8.26851C33.703 7.95651 33.859 7.52451 33.859 6.97251V6.87651C33.859 6.32451 33.703 5.89251 33.391 5.58051C33.079 5.26851 32.631 5.11251 32.047 5.11251C31.647 5.11251 31.335 5.18051 31.111 5.31651C30.895 5.45251 30.695 5.62051 30.511 5.82051L29.659 5.70051L29.959 1.09251H34.519V1.96851ZM39.3023 9.61251C38.7903 9.61251 38.3503 9.51651 37.9823 9.32451C37.6143 9.12451 37.3103 8.84051 37.0703 8.47251C36.8303 8.10451 36.6543 7.65251 36.5423 7.11651C36.4303 6.58051 36.3743 5.96851 36.3743 5.28051C36.3743 4.60051 36.4303 3.99251 36.5423 3.45651C36.6543 2.91251 36.8303 2.45651 37.0703 2.08851C37.3103 1.72051 37.6143 1.44051 37.9823 1.24851C38.3503 1.04851 38.7903 0.948505 39.3023 0.948505C39.8143 0.948505 40.2543 1.04851 40.6223 1.24851C40.9903 1.44051 41.2943 1.72051 41.5343 2.08851C41.7743 2.45651 41.9503 2.91251 42.0623 3.45651C42.1743 3.99251 42.2303 4.60051 42.2303 5.28051C42.2303 5.96851 42.1743 6.58051 42.0623 7.11651C41.9503 7.65251 41.7743 8.10451 41.5343 8.47251C41.2943 8.84051 40.9903 9.12451 40.6223 9.32451C40.2543 9.51651 39.8143 9.61251 39.3023 9.61251ZM39.3023 8.73651C39.6383 8.73651 39.9263 8.67251 40.1663 8.54451C40.4063 8.40851 40.5983 8.22051 40.7423 7.98051C40.8943 7.74051 41.0063 7.45251 41.0783 7.11651C41.1503 6.77251 41.1863 6.38851 41.1863 5.96451V4.59651C41.1863 4.18051 41.1503 3.80051 41.0783 3.45651C41.0063 3.11251 40.8943 2.82051 40.7423 2.58051C40.5983 2.34051 40.4063 2.15651 40.1663 2.02851C39.9263 1.89251 39.6383 1.82451 39.3023 1.82451C38.9663 1.82451 38.6783 1.89251 38.4383 2.02851C38.1983 2.15651 38.0023 2.34051 37.8503 2.58051C37.7063 2.82051 37.5983 3.11251 37.5263 3.45651C37.4543 3.80051 37.4183 4.18051 37.4183 4.59651V5.96451C37.4183 6.38851 37.4543 6.77251 37.5263 7.11651C37.5983 7.45251 37.7063 7.74051 37.8503 7.98051C38.0023 8.22051 38.1983 8.40851 38.4383 8.54451C38.6783 8.67251 38.9663 8.73651 39.3023 8.73651ZM39.3023 5.98851C39.0223 5.98851 38.8263 5.93251 38.7143 5.82051C38.6103 5.70851 38.5583 5.57251 38.5583 5.41251V5.14851C38.5583 4.98851 38.6103 4.85251 38.7143 4.74051C38.8263 4.62851 39.0223 4.57251 39.3023 4.57251C39.5823 4.57251 39.7743 4.62851 39.8783 4.74051C39.9903 4.85251 40.0463 4.98851 40.0463 5.14851V5.41251C40.0463 5.57251 39.9903 5.70851 39.8783 5.82051C39.7743 5.93251 39.5823 5.98851 39.3023 5.98851ZM43.9776 11.1245L48.1536 0.348505H49.0176L44.8416 11.1245H43.9776ZM56.1049 1.96851H52.3609L52.1209 5.17251H52.2049C52.4129 4.89251 52.6449 4.67251 52.9009 4.51251C53.1569 4.34451 53.5089 4.26051 53.9569 4.26051C54.3249 4.26051 54.6609 4.32051 54.9649 4.44051C55.2769 4.55251 55.5449 4.72051 55.7689 4.94451C55.9929 5.16851 56.1689 5.44051 56.2969 5.76051C56.4249 6.07251 56.4889 6.43251 56.4889 6.84051C56.4889 7.24851 56.4249 7.62451 56.2969 7.96851C56.1689 8.30451 55.9809 8.59651 55.7329 8.84451C55.4849 9.08451 55.1849 9.27251 54.8329 9.40851C54.4809 9.54451 54.0809 9.61251 53.6329 9.61251C53.2809 9.61251 52.9649 9.57251 52.6849 9.49251C52.4129 9.41251 52.1689 9.30451 51.9529 9.16851C51.7449 9.03251 51.5609 8.88051 51.4009 8.71251C51.2409 8.54451 51.0969 8.36851 50.9689 8.18451L51.7249 7.60851C51.8369 7.77651 51.9489 7.92851 52.0609 8.06451C52.1809 8.20051 52.3169 8.32051 52.4689 8.42451C52.6209 8.52051 52.7929 8.59651 52.9849 8.65251C53.1769 8.70851 53.4009 8.73651 53.6569 8.73651C54.2329 8.73651 54.6729 8.58051 54.9769 8.26851C55.2889 7.95651 55.4449 7.52451 55.4449 6.97251V6.87651C55.4449 6.32451 55.2889 5.89251 54.9769 5.58051C54.6649 5.26851 54.2169 5.11251 53.6329 5.11251C53.2329 5.11251 52.9209 5.18051 52.6969 5.31651C52.4809 5.45251 52.2809 5.62051 52.0969 5.82051L51.2449 5.70051L51.5449 1.09251H56.1049V1.96851ZM60.8882 9.61251C60.3762 9.61251 59.9362 9.51651 59.5682 9.32451C59.2002 9.12451 58.8962 8.84051 58.6562 8.47251C58.4162 8.10451 58.2402 7.65251 58.1282 7.11651C58.0162 6.58051 57.9602 5.96851 57.9602 5.28051C57.9602 4.60051 58.0162 3.99251 58.1282 3.45651C58.2402 2.91251 58.4162 2.45651 58.6562 2.08851C58.8962 1.72051 59.2002 1.44051 59.5682 1.24851C59.9362 1.04851 60.3762 0.948505 60.8882 0.948505C61.4002 0.948505 61.8402 1.04851 62.2082 1.24851C62.5762 1.44051 62.8802 1.72051 63.1202 2.08851C63.3602 2.45651 63.5362 2.91251 63.6482 3.45651C63.7602 3.99251 63.8162 4.60051 63.8162 5.28051C63.8162 5.96851 63.7602 6.58051 63.6482 7.11651C63.5362 7.65251 63.3602 8.10451 63.1202 8.47251C62.8802 8.84051 62.5762 9.12451 62.2082 9.32451C61.8402 9.51651 61.4002 9.61251 60.8882 9.61251ZM60.8882 8.73651C61.2242 8.73651 61.5122 8.67251 61.7522 8.54451C61.9922 8.40851 62.1842 8.22051 62.3282 7.98051C62.4802 7.74051 62.5922 7.45251 62.6642 7.11651C62.7362 6.77251 62.7722 6.38851 62.7722 5.96451V4.59651C62.7722 4.18051 62.7362 3.80051 62.6642 3.45651C62.5922 3.11251 62.4802 2.82051 62.3282 2.58051C62.1842 2.34051 61.9922 2.15651 61.7522 2.02851C61.5122 1.89251 61.2242 1.82451 60.8882 1.82451C60.5522 1.82451 60.2642 1.89251 60.0242 2.02851C59.7842 2.15651 59.5882 2.34051 59.4362 2.58051C59.2922 2.82051 59.1842 3.11251 59.1122 3.45651C59.0402 3.80051 59.0042 4.18051 59.0042 4.59651V5.96451C59.0042 6.38851 59.0402 6.77251 59.1122 7.11651C59.1842 7.45251 59.2922 7.74051 59.4362 7.98051C59.5882 8.22051 59.7842 8.40851 60.0242 8.54451C60.2642 8.67251 60.5522 8.73651 60.8882 8.73651ZM60.8882 5.98851C60.6082 5.98851 60.4122 5.93251 60.3002 5.82051C60.1962 5.70851 60.1442 5.57251 60.1442 5.41251V5.14851C60.1442 4.98851 60.1962 4.85251 60.3002 4.74051C60.4122 4.62851 60.6082 4.57251 60.8882 4.57251C61.1682 4.57251 61.3602 4.62851 61.4642 4.74051C61.5762 4.85251 61.6322 4.98851 61.6322 5.14851V5.41251C61.6322 5.57251 61.5762 5.70851 61.4642 5.82051C61.3602 5.93251 61.1682 5.98851 60.8882 5.98851ZM3.39772 29.6125C2.74972 29.6125 2.18972 29.5045 1.71772 29.2885C1.25372 29.0645 0.857723 28.7685 0.529723 28.4005L1.17772 27.8365C1.47372 28.1485 1.79772 28.3885 2.14972 28.5565C2.50172 28.7245 2.92572 28.8085 3.42172 28.8085C3.90172 28.8085 4.29372 28.7245 4.59772 28.5565C4.90972 28.3805 5.06572 28.1085 5.06572 27.7405C5.06572 27.5805 5.03372 27.4485 4.96972 27.3445C4.91372 27.2325 4.83372 27.1445 4.72972 27.0805C4.62572 27.0165 4.50972 26.9685 4.38172 26.9365C4.25372 26.8965 4.11772 26.8645 3.97372 26.8405L3.00172 26.6965C2.78572 26.6645 2.54972 26.6205 2.29372 26.5645C2.04572 26.5085 1.81772 26.4205 1.60972 26.3005C1.40172 26.1725 1.22572 26.0045 1.08172 25.7965C0.945723 25.5885 0.877723 25.3165 0.877723 24.9805C0.877723 24.6685 0.937723 24.4005 1.05772 24.1765C1.18572 23.9445 1.36172 23.7525 1.58572 23.6005C1.80972 23.4405 2.07372 23.3245 2.37772 23.2525C2.68172 23.1725 3.01372 23.1325 3.37372 23.1325C3.93372 23.1325 4.41772 23.2205 4.82572 23.3965C5.24172 23.5725 5.59772 23.8165 5.89372 24.1285L5.26972 24.7165C5.19772 24.6285 5.10572 24.5405 4.99372 24.4525C4.88972 24.3565 4.75772 24.2725 4.59772 24.2005C4.44572 24.1205 4.26572 24.0565 4.05772 24.0085C3.84972 23.9605 3.60972 23.9365 3.33772 23.9365C2.84972 23.9365 2.47372 24.0205 2.20972 24.1885C1.95372 24.3565 1.82572 24.6005 1.82572 24.9205C1.82572 25.0805 1.85372 25.2165 1.90972 25.3285C1.97372 25.4325 2.05772 25.5165 2.16172 25.5805C2.26572 25.6445 2.38172 25.6965 2.50972 25.7365C2.64572 25.7685 2.78172 25.7965 2.91772 25.8205L3.88972 25.9645C4.11372 25.9965 4.34972 26.0405 4.59772 26.0965C4.84572 26.1525 5.07372 26.2445 5.28172 26.3725C5.48972 26.4925 5.66172 26.6565 5.79772 26.8645C5.94172 27.0725 6.01372 27.3445 6.01372 27.6805C6.01372 28.2965 5.77372 28.7725 5.29372 29.1085C4.82172 29.4445 4.18972 29.6125 3.39772 29.6125ZM8.06104 23.2765H9.02104V24.2845H9.06904C9.46904 23.5165 10.105 23.1325 10.977 23.1325C11.737 23.1325 12.329 23.4165 12.753 23.9845C13.185 24.5525 13.401 25.3485 13.401 26.3725C13.401 27.3965 13.185 28.1925 12.753 28.7605C12.329 29.3285 11.737 29.6125 10.977 29.6125C10.105 29.6125 9.46904 29.2285 9.06904 28.4605H9.02104V31.8685H8.06104V23.2765ZM10.605 28.7605C11.165 28.7605 11.597 28.5925 11.901 28.2565C12.213 27.9125 12.369 27.4605 12.369 26.9005V25.8445C12.369 25.2845 12.213 24.8365 11.901 24.5005C11.597 24.1565 11.165 23.9845 10.605 23.9845C10.389 23.9845 10.185 24.0125 9.99304 24.0685C9.80104 24.1245 9.63304 24.2085 9.48904 24.3205C9.34504 24.4245 9.22904 24.5565 9.14104 24.7165C9.06104 24.8685 9.02104 25.0485 9.02104 25.2565V27.4885C9.02104 27.6965 9.06104 27.8805 9.14104 28.0405C9.22904 28.1925 9.34504 28.3245 9.48904 28.4365C9.63304 28.5405 9.80104 28.6205 9.99304 28.6765C10.185 28.7325 10.389 28.7605 10.605 28.7605ZM15.0763 28.6525H17.2363V21.4045H15.0763V20.5885H18.1963V28.6525H20.3563V29.4685H15.0763V28.6525ZM25.2957 21.9085C25.0157 21.9085 24.8197 21.8525 24.7077 21.7405C24.5957 21.6205 24.5397 21.4725 24.5397 21.2965V21.1045C24.5397 20.9285 24.5957 20.7845 24.7077 20.6725C24.8197 20.5525 25.0157 20.4925 25.2957 20.4925C25.5757 20.4925 25.7717 20.5525 25.8837 20.6725C25.9957 20.7845 26.0517 20.9285 26.0517 21.1045V21.2965C26.0517 21.4725 25.9957 21.6205 25.8837 21.7405C25.7717 21.8525 25.5757 21.9085 25.2957 21.9085ZM22.5837 28.6525H24.8157V24.0925H22.5837V23.2765H25.7757V28.6525H27.8637V29.4685H22.5837V28.6525ZM32.407 29.4685C31.935 29.4685 31.587 29.3365 31.363 29.0725C31.147 28.8085 31.039 28.4685 31.039 28.0525V24.0925H28.975V23.2765H30.511C30.719 23.2765 30.863 23.2365 30.943 23.1565C31.031 23.0685 31.075 22.9205 31.075 22.7125V21.0925H31.999V23.2765H34.819V24.0925H31.999V28.6525H34.819V29.4685H32.407ZM44.0376 20.5885H44.9976V24.2845H45.0456C45.4456 23.5165 46.0816 23.1325 46.9536 23.1325C47.7136 23.1325 48.3056 23.4165 48.7296 23.9845C49.1616 24.5525 49.3776 25.3485 49.3776 26.3725C49.3776 27.3965 49.1616 28.1925 48.7296 28.7605C48.3056 29.3285 47.7136 29.6125 46.9536 29.6125C46.0816 29.6125 45.4456 29.2285 45.0456 28.4605H44.9976V29.4685H44.0376V20.5885ZM46.5816 28.7605C47.1416 28.7605 47.5736 28.5925 47.8776 28.2565C48.1896 27.9125 48.3456 27.4605 48.3456 26.9005V25.8445C48.3456 25.2845 48.1896 24.8365 47.8776 24.5005C47.5736 24.1565 47.1416 23.9845 46.5816 23.9845C46.3656 23.9845 46.1616 24.0125 45.9696 24.0685C45.7776 24.1245 45.6096 24.2085 45.4656 24.3205C45.3216 24.4245 45.2056 24.5565 45.1176 24.7165C45.0376 24.8685 44.9976 25.0485 44.9976 25.2565V27.4885C44.9976 27.6965 45.0376 27.8805 45.1176 28.0405C45.2056 28.1925 45.3216 28.3245 45.4656 28.4365C45.6096 28.5405 45.7776 28.6205 45.9696 28.6765C46.1616 28.7325 46.3656 28.7605 46.5816 28.7605ZM53.8009 29.6125C53.3529 29.6125 52.9489 29.5365 52.5889 29.3845C52.2369 29.2325 51.9329 29.0165 51.6769 28.7365C51.4289 28.4485 51.2369 28.1085 51.1009 27.7165C50.9649 27.3165 50.8969 26.8725 50.8969 26.3845C50.8969 25.8885 50.9649 25.4405 51.1009 25.0405C51.2449 24.6405 51.4409 24.3005 51.6889 24.0205C51.9369 23.7325 52.2329 23.5125 52.5769 23.3605C52.9289 23.2085 53.3169 23.1325 53.7409 23.1325C54.1569 23.1325 54.5329 23.2085 54.8689 23.3605C55.2129 23.5125 55.5049 23.7245 55.7449 23.9965C55.9849 24.2605 56.1689 24.5765 56.2969 24.9445C56.4249 25.3125 56.4889 25.7165 56.4889 26.1565V26.6125H51.9049V26.9005C51.9049 27.1725 51.9489 27.4245 52.0369 27.6565C52.1249 27.8885 52.2489 28.0885 52.4089 28.2565C52.5769 28.4245 52.7769 28.5565 53.0089 28.6525C53.2489 28.7405 53.5129 28.7845 53.8009 28.7845C54.2169 28.7845 54.5769 28.6885 54.8809 28.4965C55.1849 28.3045 55.4169 28.0405 55.5769 27.7045L56.2849 28.1845C56.1009 28.6005 55.7929 28.9445 55.3609 29.2165C54.9369 29.4805 54.4169 29.6125 53.8009 29.6125ZM53.7409 23.9245C53.4769 23.9245 53.2329 23.9725 53.0089 24.0685C52.7849 24.1645 52.5889 24.2965 52.4209 24.4645C52.2609 24.6325 52.1329 24.8325 52.0369 25.0645C51.9489 25.2885 51.9049 25.5365 51.9049 25.8085V25.8925H55.4569V25.7605C55.4569 25.4885 55.4129 25.2405 55.3249 25.0165C55.2449 24.7925 55.1289 24.6005 54.9769 24.4405C54.8329 24.2725 54.6529 24.1445 54.4369 24.0565C54.2289 23.9685 53.9969 23.9245 53.7409 23.9245ZM61.1882 29.4685C60.7162 29.4685 60.3682 29.3365 60.1442 29.0725C59.9282 28.8085 59.8202 28.4685 59.8202 28.0525V24.0925H57.7562V23.2765H59.2922C59.5002 23.2765 59.6442 23.2365 59.7242 23.1565C59.8122 23.0685 59.8562 22.9205 59.8562 22.7125V21.0925H60.7802V23.2765H63.6002V24.0925H60.7802V28.6525H63.6002V29.4685H61.1882ZM64.8435 23.2765H65.6955L66.4035 28.6285H66.5115L67.5675 23.2765H68.6235L69.6795 28.6285H69.7875L70.4955 23.2765H71.3235L70.3755 29.4685H69.1275L68.1435 24.2845H68.0475L67.0395 29.4685H65.7915L64.8435 23.2765ZM75.3868 29.6125C74.9388 29.6125 74.5348 29.5365 74.1748 29.3845C73.8228 29.2325 73.5188 29.0165 73.2628 28.7365C73.0148 28.4485 72.8228 28.1085 72.6868 27.7165C72.5508 27.3165 72.4828 26.8725 72.4828 26.3845C72.4828 25.8885 72.5508 25.4405 72.6868 25.0405C72.8308 24.6405 73.0268 24.3005 73.2748 24.0205C73.5228 23.7325 73.8188 23.5125 74.1628 23.3605C74.5148 23.2085 74.9028 23.1325 75.3268 23.1325C75.7428 23.1325 76.1188 23.2085 76.4548 23.3605C76.7988 23.5125 77.0908 23.7245 77.3308 23.9965C77.5708 24.2605 77.7548 24.5765 77.8828 24.9445C78.0108 25.3125 78.0748 25.7165 78.0748 26.1565V26.6125H73.4908V26.9005C73.4908 27.1725 73.5348 27.4245 73.6228 27.6565C73.7108 27.8885 73.8348 28.0885 73.9948 28.2565C74.1628 28.4245 74.3628 28.5565 74.5948 28.6525C74.8348 28.7405 75.0988 28.7845 75.3868 28.7845C75.8028 28.7845 76.1628 28.6885 76.4668 28.4965C76.7708 28.3045 77.0028 28.0405 77.1628 27.7045L77.8708 28.1845C77.6868 28.6005 77.3788 28.9445 76.9468 29.2165C76.5228 29.4805 76.0028 29.6125 75.3868 29.6125ZM75.3268 23.9245C75.0628 23.9245 74.8188 23.9725 74.5948 24.0685C74.3708 24.1645 74.1748 24.2965 74.0068 24.4645C73.8468 24.6325 73.7188 24.8325 73.6228 25.0645C73.5348 25.2885 73.4908 25.5365 73.4908 25.8085V25.8925H77.0428V25.7605C77.0428 25.4885 76.9988 25.2405 76.9108 25.0165C76.8308 24.7925 76.7148 24.6005 76.5628 24.4405C76.4188 24.2725 76.2388 24.1445 76.0228 24.0565C75.8148 23.9685 75.5828 23.9245 75.3268 23.9245ZM82.5822 29.6125C82.1342 29.6125 81.7302 29.5365 81.3702 29.3845C81.0182 29.2325 80.7142 29.0165 80.4582 28.7365C80.2102 28.4485 80.0182 28.1085 79.8822 27.7165C79.7462 27.3165 79.6782 26.8725 79.6782 26.3845C79.6782 25.8885 79.7462 25.4405 79.8822 25.0405C80.0262 24.6405 80.2222 24.3005 80.4702 24.0205C80.7182 23.7325 81.0142 23.5125 81.3582 23.3605C81.7102 23.2085 82.0982 23.1325 82.5222 23.1325C82.9382 23.1325 83.3142 23.2085 83.6502 23.3605C83.9942 23.5125 84.2862 23.7245 84.5262 23.9965C84.7662 24.2605 84.9502 24.5765 85.0782 24.9445C85.2062 25.3125 85.2702 25.7165 85.2702 26.1565V26.6125H80.6862V26.9005C80.6862 27.1725 80.7302 27.4245 80.8182 27.6565C80.9062 27.8885 81.0302 28.0885 81.1902 28.2565C81.3582 28.4245 81.5582 28.5565 81.7902 28.6525C82.0302 28.7405 82.2942 28.7845 82.5822 28.7845C82.9982 28.7845 83.3582 28.6885 83.6622 28.4965C83.9662 28.3045 84.1982 28.0405 84.3582 27.7045L85.0662 28.1845C84.8822 28.6005 84.5742 28.9445 84.1422 29.2165C83.7182 29.4805 83.1982 29.6125 82.5822 29.6125ZM82.5222 23.9245C82.2582 23.9245 82.0142 23.9725 81.7902 24.0685C81.5662 24.1645 81.3702 24.2965 81.2022 24.4645C81.0422 24.6325 80.9142 24.8325 80.8182 25.0645C80.7302 25.2885 80.6862 25.5365 80.6862 25.8085V25.8925H84.2382V25.7605C84.2382 25.4885 84.1942 25.2405 84.1062 25.0165C84.0262 24.7925 83.9102 24.6005 83.7582 24.4405C83.6142 24.2725 83.4342 24.1445 83.2182 24.0565C83.0102 23.9685 82.7782 23.9245 82.5222 23.9245ZM87.2455 29.4685V23.2765H88.2055V24.2845H88.2535C88.3175 24.1325 88.3975 23.9885 88.4935 23.8525C88.5895 23.7085 88.7055 23.5845 88.8415 23.4805C88.9855 23.3765 89.1535 23.2925 89.3455 23.2285C89.5375 23.1645 89.7615 23.1325 90.0175 23.1325C90.6655 23.1325 91.1855 23.3405 91.5775 23.7565C91.9695 24.1645 92.1655 24.7445 92.1655 25.4965V29.4685H91.2055V25.6645C91.2055 25.0965 91.0815 24.6765 90.8335 24.4045C90.5855 24.1245 90.2215 23.9845 89.7415 23.9845C89.5495 23.9845 89.3615 24.0085 89.1775 24.0565C88.9935 24.1045 88.8295 24.1765 88.6855 24.2725C88.5415 24.3685 88.4255 24.4925 88.3375 24.6445C88.2495 24.7965 88.2055 24.9725 88.2055 25.1725V29.4685H87.2455ZM21.314 49.6125C20.882 49.6125 20.49 49.5365 20.138 49.3845C19.794 49.2325 19.498 49.0165 19.25 48.7365C19.01 48.4485 18.826 48.1085 18.698 47.7165C18.57 47.3165 18.506 46.8685 18.506 46.3725C18.506 45.8845 18.57 45.4405 18.698 45.0405C18.826 44.6405 19.01 44.3005 19.25 44.0205C19.498 43.7325 19.794 43.5125 20.138 43.3605C20.49 43.2085 20.882 43.1325 21.314 43.1325C21.746 43.1325 22.134 43.2085 22.478 43.3605C22.83 43.5125 23.126 43.7325 23.366 44.0205C23.614 44.3005 23.802 44.6405 23.93 45.0405C24.058 45.4405 24.122 45.8845 24.122 46.3725C24.122 46.8685 24.058 47.3165 23.93 47.7165C23.802 48.1085 23.614 48.4485 23.366 48.7365C23.126 49.0165 22.83 49.2325 22.478 49.3845C22.134 49.5365 21.746 49.6125 21.314 49.6125ZM21.314 48.7845C21.85 48.7845 22.282 48.6245 22.61 48.3045C22.938 47.9845 23.102 47.4885 23.102 46.8165V45.9285C23.102 45.2565 22.938 44.7605 22.61 44.4405C22.282 44.1205 21.85 43.9605 21.314 43.9605C20.778 43.9605 20.346 44.1205 20.018 44.4405C19.69 44.7605 19.526 45.2565 19.526 45.9285V46.8165C19.526 47.4885 19.69 47.9845 20.018 48.3045C20.346 48.6245 20.778 48.7845 21.314 48.7845ZM25.8333 48.6525H27.6453V44.0925H25.8333V43.2765H28.6053V44.8365H28.6653C28.7933 44.3485 29.0333 43.9685 29.3853 43.6965C29.7453 43.4165 30.2013 43.2765 30.7533 43.2765H31.6173V44.2365H30.4533C29.9013 44.2365 29.4533 44.3965 29.1093 44.7165C28.7733 45.0365 28.6053 45.4565 28.6053 45.9765V48.6525H31.0053V49.4685H25.8333V48.6525ZM36.0886 41.9085C35.8086 41.9085 35.6126 41.8525 35.5006 41.7405C35.3886 41.6205 35.3326 41.4725 35.3326 41.2965V41.1045C35.3326 40.9285 35.3886 40.7845 35.5006 40.6725C35.6126 40.5525 35.8086 40.4925 36.0886 40.4925C36.3686 40.4925 36.5646 40.5525 36.6766 40.6725C36.7886 40.7845 36.8446 40.9285 36.8446 41.1045V41.2965C36.8446 41.4725 36.7886 41.6205 36.6766 41.7405C36.5646 41.8525 36.3686 41.9085 36.0886 41.9085ZM33.3766 48.6525H35.6086V44.0925H33.3766V43.2765H36.5686V48.6525H38.6566V49.4685H33.3766V48.6525ZM46.0319 50.1765C46.0319 50.8005 45.7719 51.2605 45.2519 51.5565C44.7319 51.8605 43.9519 52.0125 42.9119 52.0125C41.9119 52.0125 41.1919 51.8805 40.7519 51.6165C40.3199 51.3525 40.1039 50.9725 40.1039 50.4765C40.1039 50.1405 40.1919 49.8805 40.3679 49.6965C40.5439 49.5125 40.7919 49.3765 41.1119 49.2885V49.1445C40.9359 49.0565 40.7999 48.9445 40.7039 48.8085C40.6079 48.6725 40.5599 48.5005 40.5599 48.2925C40.5599 47.9725 40.6639 47.7325 40.8719 47.5725C41.0879 47.4125 41.3559 47.2925 41.6759 47.2125V47.1645C41.2919 46.9965 40.9919 46.7485 40.7759 46.4205C40.5679 46.0925 40.4639 45.7085 40.4639 45.2685C40.4639 44.9565 40.5199 44.6685 40.6319 44.4045C40.7439 44.1405 40.9039 43.9165 41.1119 43.7325C41.3279 43.5405 41.5839 43.3925 41.8799 43.2885C42.1759 43.1845 42.5039 43.1325 42.8639 43.1325C43.3279 43.1325 43.7359 43.2165 44.0879 43.3845V43.2765C44.0879 43.0365 44.1439 42.8365 44.2559 42.6765C44.3679 42.5165 44.5599 42.4365 44.8319 42.4365H45.9719V43.2765H44.5799V43.6965C44.8039 43.8885 44.9759 44.1165 45.0959 44.3805C45.2159 44.6445 45.2759 44.9405 45.2759 45.2685C45.2759 45.5805 45.2159 45.8685 45.0959 46.1325C44.9839 46.3965 44.8239 46.6245 44.6159 46.8165C44.4079 47.0005 44.1519 47.1445 43.8479 47.2485C43.5519 47.3525 43.2239 47.4045 42.8639 47.4045C42.7599 47.4045 42.6599 47.4005 42.5639 47.3925C42.4679 47.3845 42.3719 47.3725 42.2759 47.3565C42.1799 47.3725 42.0799 47.4005 41.9759 47.4405C41.8719 47.4725 41.7759 47.5205 41.6879 47.5845C41.5999 47.6405 41.5279 47.7085 41.4719 47.7885C41.4159 47.8685 41.3879 47.9605 41.3879 48.0645C41.3879 48.2485 41.4799 48.3725 41.6639 48.4365C41.8479 48.4925 42.0879 48.5205 42.3839 48.5205H43.7519C44.5519 48.5205 45.1319 48.6725 45.4919 48.9765C45.8519 49.2725 46.0319 49.6725 46.0319 50.1765ZM45.1319 50.2245C45.1319 49.9765 45.0319 49.7765 44.8319 49.6245C44.6319 49.4805 44.2839 49.4085 43.7879 49.4085H41.6399C41.2239 49.5765 41.0159 49.8565 41.0159 50.2485C41.0159 50.5205 41.1239 50.7525 41.3399 50.9445C41.5559 51.1445 41.9159 51.2445 42.4199 51.2445H43.3559C43.9159 51.2445 44.3519 51.1565 44.6639 50.9805C44.9759 50.8125 45.1319 50.5605 45.1319 50.2245ZM42.8639 46.6605C43.3439 46.6605 43.6959 46.5485 43.9199 46.3245C44.1519 46.1005 44.2679 45.8045 44.2679 45.4365V45.0885C44.2679 44.7205 44.1519 44.4285 43.9199 44.2125C43.6959 43.9885 43.3439 43.8765 42.8639 43.8765C42.3839 43.8765 42.0319 43.9885 41.8079 44.2125C41.5839 44.4285 41.4719 44.7205 41.4719 45.0885V45.4365C41.4719 45.8045 41.5839 46.1005 41.8079 46.3245C42.0319 46.5485 42.3839 46.6605 42.8639 46.6605ZM50.4793 41.9085C50.1993 41.9085 50.0033 41.8525 49.8913 41.7405C49.7793 41.6205 49.7233 41.4725 49.7233 41.2965V41.1045C49.7233 40.9285 49.7793 40.7845 49.8913 40.6725C50.0033 40.5525 50.1993 40.4925 50.4793 40.4925C50.7593 40.4925 50.9553 40.5525 51.0673 40.6725C51.1793 40.7845 51.2353 40.9285 51.2353 41.1045V41.2965C51.2353 41.4725 51.1793 41.6205 51.0673 41.7405C50.9553 41.8525 50.7593 41.9085 50.4793 41.9085ZM47.7673 48.6525H49.9993V44.0925H47.7673V43.2765H50.9593V48.6525H53.0473V49.4685H47.7673V48.6525ZM54.8666 49.4685V43.2765H55.8266V44.2845H55.8746C55.9386 44.1325 56.0186 43.9885 56.1146 43.8525C56.2106 43.7085 56.3266 43.5845 56.4626 43.4805C56.6066 43.3765 56.7746 43.2925 56.9666 43.2285C57.1586 43.1645 57.3826 43.1325 57.6386 43.1325C58.2866 43.1325 58.8066 43.3405 59.1986 43.7565C59.5906 44.1645 59.7866 44.7445 59.7866 45.4965V49.4685H58.8266V45.6645C58.8266 45.0965 58.7026 44.6765 58.4546 44.4045C58.2066 44.1245 57.8426 43.9845 57.3626 43.9845C57.1706 43.9845 56.9826 44.0085 56.7986 44.0565C56.6146 44.1045 56.4506 44.1765 56.3066 44.2725C56.1626 44.3685 56.0466 44.4925 55.9586 44.6445C55.8706 44.7965 55.8266 44.9725 55.8266 45.1725V49.4685H54.8666ZM66.8259 49.4685C66.4499 49.4685 66.1819 49.3725 66.0219 49.1805C65.8619 48.9885 65.7619 48.7485 65.7219 48.4605H65.6619C65.5259 48.8205 65.3059 49.1045 65.0019 49.3125C64.7059 49.5125 64.3059 49.6125 63.8019 49.6125C63.1539 49.6125 62.6379 49.4445 62.2539 49.1085C61.8699 48.7725 61.6779 48.3125 61.6779 47.7285C61.6779 47.1525 61.8859 46.7085 62.3019 46.3965C62.7259 46.0845 63.4059 45.9285 64.3419 45.9285H65.6619V45.3165C65.6619 44.8605 65.5339 44.5205 65.2779 44.2965C65.0219 44.0645 64.6579 43.9485 64.1859 43.9485C63.7699 43.9485 63.4299 44.0325 63.1659 44.2005C62.9019 44.3605 62.6899 44.5805 62.5299 44.8605L61.8819 44.3805C61.9619 44.2205 62.0699 44.0645 62.2059 43.9125C62.3419 43.7605 62.5099 43.6285 62.7099 43.5165C62.9099 43.3965 63.1379 43.3045 63.3939 43.2405C63.6499 43.1685 63.9339 43.1325 64.2459 43.1325C64.9739 43.1325 65.5499 43.3165 65.9739 43.6845C66.4059 44.0525 66.6219 44.5645 66.6219 45.2205V48.6285H67.4859V49.4685H66.8259ZM63.9699 48.8085C64.2179 48.8085 64.4419 48.7805 64.6419 48.7245C64.8499 48.6605 65.0299 48.5805 65.1819 48.4845C65.3339 48.3805 65.4499 48.2605 65.5299 48.1245C65.6179 47.9805 65.6619 47.8285 65.6619 47.6685V46.6485H64.3419C63.7659 46.6485 63.3459 46.7285 63.0819 46.8885C62.8179 47.0485 62.6859 47.2805 62.6859 47.5845V47.8365C62.6859 48.1565 62.7979 48.4005 63.0219 48.5685C63.2539 48.7285 63.5699 48.8085 63.9699 48.8085ZM69.0412 48.6525H71.2012V41.4045H69.0412V40.5885H72.1612V48.6525H74.3212V49.4685H69.0412V48.6525ZM23.654 69.4685C23.278 69.4685 23.01 69.3725 22.85 69.1805C22.69 68.9885 22.59 68.7485 22.55 68.4605H22.49C22.354 68.8205 22.134 69.1045 21.83 69.3125C21.534 69.5125 21.134 69.6125 20.63 69.6125C19.982 69.6125 19.466 69.4445 19.082 69.1085C18.698 68.7725 18.506 68.3125 18.506 67.7285C18.506 67.1525 18.714 66.7085 19.13 66.3965C19.554 66.0845 20.234 65.9285 21.17 65.9285H22.49V65.3165C22.49 64.8605 22.362 64.5205 22.106 64.2965C21.85 64.0645 21.486 63.9485 21.014 63.9485C20.598 63.9485 20.258 64.0325 19.994 64.2005C19.73 64.3605 19.518 64.5805 19.358 64.8605L18.71 64.3805C18.79 64.2205 18.898 64.0645 19.034 63.9125C19.17 63.7605 19.338 63.6285 19.538 63.5165C19.738 63.3965 19.966 63.3045 20.222 63.2405C20.478 63.1685 20.762 63.1325 21.074 63.1325C21.802 63.1325 22.378 63.3165 22.802 63.6845C23.234 64.0525 23.45 64.5645 23.45 65.2205V68.6285H24.314V69.4685H23.654ZM20.798 68.8085C21.046 68.8085 21.27 68.7805 21.47 68.7245C21.678 68.6605 21.858 68.5805 22.01 68.4845C22.162 68.3805 22.278 68.2605 22.358 68.1245C22.446 67.9805 22.49 67.8285 22.49 67.6685V66.6485H21.17C20.594 66.6485 20.174 66.7285 19.91 66.8885C19.646 67.0485 19.514 67.2805 19.514 67.5845V67.8365C19.514 68.1565 19.626 68.4005 19.85 68.5685C20.082 68.7285 20.398 68.8085 20.798 68.8085ZM25.8333 68.6525H27.6453V64.0925H25.8333V63.2765H28.6053V64.8365H28.6653C28.7933 64.3485 29.0333 63.9685 29.3853 63.6965C29.7453 63.4165 30.2013 63.2765 30.7533 63.2765H31.6173V64.2365H30.4533C29.9013 64.2365 29.4533 64.3965 29.1093 64.7165C28.7733 65.0365 28.6053 65.4565 28.6053 65.9765V68.6525H31.0053V69.4685H25.8333V68.6525ZM36.0046 69.4685C35.5326 69.4685 35.1846 69.3365 34.9606 69.0725C34.7446 68.8085 34.6366 68.4685 34.6366 68.0525V64.0925H32.5726V63.2765H34.1086C34.3166 63.2765 34.4606 63.2365 34.5406 63.1565C34.6286 63.0685 34.6726 62.9205 34.6726 62.7125V61.0925H35.5966V63.2765H38.4166V64.0925H35.5966V68.6525H38.4166V69.4685H36.0046ZM43.2839 61.9085C43.0039 61.9085 42.8079 61.8525 42.6959 61.7405C42.5839 61.6205 42.5279 61.4725 42.5279 61.2965V61.1045C42.5279 60.9285 42.5839 60.7845 42.6959 60.6725C42.8079 60.5525 43.0039 60.4925 43.2839 60.4925C43.5639 60.4925 43.7599 60.5525 43.8719 60.6725C43.9839 60.7845 44.0399 60.9285 44.0399 61.1045V61.2965C44.0399 61.4725 43.9839 61.6205 43.8719 61.7405C43.7599 61.8525 43.5639 61.9085 43.2839 61.9085ZM40.5719 68.6525H42.8039V64.0925H40.5719V63.2765H43.7639V68.6525H45.8519V69.4685H40.5719V68.6525ZM50.1673 69.6125C49.5193 69.6125 48.9593 69.5045 48.4873 69.2885C48.0233 69.0645 47.6273 68.7685 47.2993 68.4005L47.9473 67.8365C48.2433 68.1485 48.5673 68.3885 48.9193 68.5565C49.2713 68.7245 49.6953 68.8085 50.1913 68.8085C50.6713 68.8085 51.0633 68.7245 51.3673 68.5565C51.6793 68.3805 51.8353 68.1085 51.8353 67.7405C51.8353 67.5805 51.8033 67.4485 51.7393 67.3445C51.6833 67.2325 51.6033 67.1445 51.4993 67.0805C51.3953 67.0165 51.2793 66.9685 51.1513 66.9365C51.0233 66.8965 50.8873 66.8645 50.7433 66.8405L49.7713 66.6965C49.5553 66.6645 49.3193 66.6205 49.0633 66.5645C48.8153 66.5085 48.5873 66.4205 48.3793 66.3005C48.1713 66.1725 47.9953 66.0045 47.8513 65.7965C47.7153 65.5885 47.6473 65.3165 47.6473 64.9805C47.6473 64.6685 47.7073 64.4005 47.8273 64.1765C47.9553 63.9445 48.1313 63.7525 48.3553 63.6005C48.5793 63.4405 48.8433 63.3245 49.1473 63.2525C49.4513 63.1725 49.7833 63.1325 50.1433 63.1325C50.7033 63.1325 51.1873 63.2205 51.5953 63.3965C52.0113 63.5725 52.3673 63.8165 52.6633 64.1285L52.0393 64.7165C51.9673 64.6285 51.8753 64.5405 51.7633 64.4525C51.6593 64.3565 51.5273 64.2725 51.3673 64.2005C51.2153 64.1205 51.0353 64.0565 50.8273 64.0085C50.6193 63.9605 50.3793 63.9365 50.1073 63.9365C49.6193 63.9365 49.2433 64.0205 48.9793 64.1885C48.7233 64.3565 48.5953 64.6005 48.5953 64.9205C48.5953 65.0805 48.6233 65.2165 48.6793 65.3285C48.7433 65.4325 48.8273 65.5165 48.9313 65.5805C49.0353 65.6445 49.1513 65.6965 49.2793 65.7365C49.4153 65.7685 49.5513 65.7965 49.6873 65.8205L50.6593 65.9645C50.8833 65.9965 51.1193 66.0405 51.3673 66.0965C51.6153 66.1525 51.8433 66.2445 52.0513 66.3725C52.2593 66.4925 52.4313 66.6565 52.5673 66.8645C52.7113 67.0725 52.7833 67.3445 52.7833 67.6805C52.7833 68.2965 52.5433 68.7725 52.0633 69.1085C51.5913 69.4445 50.9593 69.6125 50.1673 69.6125ZM57.5906 69.4685C57.1186 69.4685 56.7706 69.3365 56.5466 69.0725C56.3306 68.8085 56.2226 68.4685 56.2226 68.0525V64.0925H54.1586V63.2765H55.6946C55.9026 63.2765 56.0466 63.2365 56.1266 63.1565C56.2146 63.0685 56.2586 62.9205 56.2586 62.7125V61.0925H57.1826V63.2765H60.0026V64.0925H57.1826V68.6525H60.0026V69.4685H57.5906ZM70.6852 69.6125C70.3172 69.6125 69.9892 69.5525 69.7012 69.4325C69.4212 69.3125 69.1812 69.1485 68.9812 68.9405C68.7892 68.7245 68.6412 68.4765 68.5372 68.1965C68.4332 67.9165 68.3812 67.6165 68.3812 67.2965C68.3812 67.0885 68.4052 66.8725 68.4532 66.6485C68.5012 66.4245 68.5852 66.2085 68.7052 66.0005C68.8252 65.7845 68.9812 65.5805 69.1732 65.3885C69.3732 65.1885 69.6252 65.0125 69.9292 64.8605C69.7052 64.5725 69.5172 64.2765 69.3652 63.9725C69.2212 63.6685 69.1492 63.3365 69.1492 62.9765C69.1492 62.6725 69.2052 62.3965 69.3172 62.1485C69.4372 61.9005 69.5932 61.6885 69.7852 61.5125C69.9852 61.3285 70.2172 61.1885 70.4812 61.0925C70.7452 60.9965 71.0252 60.9485 71.3212 60.9485C71.5852 60.9485 71.8252 60.9885 72.0412 61.0685C72.2652 61.1405 72.4612 61.2365 72.6292 61.3565C72.7972 61.4765 72.9372 61.6125 73.0492 61.7645C73.1692 61.9165 73.2572 62.0685 73.3132 62.2205L72.5212 62.6285C72.4172 62.3805 72.2612 62.1765 72.0532 62.0165C71.8452 61.8485 71.5852 61.7645 71.2732 61.7645C70.9132 61.7645 70.6252 61.8765 70.4092 62.1005C70.2012 62.3165 70.0972 62.5965 70.0972 62.9405V63.0365C70.0972 63.1645 70.1132 63.2885 70.1452 63.4085C70.1772 63.5285 70.2252 63.6565 70.2892 63.7925C70.3612 63.9205 70.4492 64.0605 70.5532 64.2125C70.6652 64.3645 70.7972 64.5365 70.9492 64.7285L72.0292 66.0605L72.9052 67.1405H72.9652C73.0212 66.8285 73.0572 66.4725 73.0732 66.0725C73.0892 65.6725 73.1052 65.2805 73.1212 64.8965H74.8132V65.7005H73.9132C73.8892 65.8925 73.8652 66.0725 73.8412 66.2405C73.8172 66.4085 73.7892 66.5725 73.7572 66.7325C73.7252 66.8925 73.6892 67.0565 73.6492 67.2245C73.6092 67.3845 73.5532 67.5565 73.4812 67.7405L74.9452 69.4685H73.8052L72.7612 68.2325H72.7012C72.5892 68.6485 72.3612 68.9845 72.0172 69.2405C71.6732 69.4885 71.2292 69.6125 70.6852 69.6125ZM70.9372 68.7605C71.2812 68.7605 71.5852 68.6885 71.8492 68.5445C72.1132 68.4005 72.3212 68.2005 72.4732 67.9445L70.3852 65.4245C70.0172 65.6565 69.7572 65.9205 69.6052 66.2165C69.4532 66.5045 69.3772 66.8205 69.3772 67.1645V67.3445C69.3772 67.7765 69.5212 68.1205 69.8092 68.3765C70.0972 68.6325 70.4732 68.7605 70.9372 68.7605ZM22.2357 88.6525H24.0477V84.0925H22.2357V83.2765H25.0077V84.8365H25.0677C25.1957 84.3485 25.4357 83.9685 25.7877 83.6965C26.1477 83.4165 26.6037 83.2765 27.1557 83.2765H28.0197V84.2365H26.8557C26.3037 84.2365 25.8557 84.3965 25.5117 84.7165C25.1757 85.0365 25.0077 85.4565 25.0077 85.9765V88.6525H27.4077V89.4685H22.2357V88.6525ZM32.215 89.6125C31.767 89.6125 31.363 89.5365 31.003 89.3845C30.651 89.2325 30.347 89.0165 30.091 88.7365C29.843 88.4485 29.651 88.1085 29.515 87.7165C29.379 87.3165 29.311 86.8725 29.311 86.3845C29.311 85.8885 29.379 85.4405 29.515 85.0405C29.659 84.6405 29.855 84.3005 30.103 84.0205C30.351 83.7325 30.647 83.5125 30.991 83.3605C31.343 83.2085 31.731 83.1325 32.155 83.1325C32.571 83.1325 32.947 83.2085 33.283 83.3605C33.627 83.5125 33.919 83.7245 34.159 83.9965C34.399 84.2605 34.583 84.5765 34.711 84.9445C34.839 85.3125 34.903 85.7165 34.903 86.1565V86.6125H30.319V86.9005C30.319 87.1725 30.363 87.4245 30.451 87.6565C30.539 87.8885 30.663 88.0885 30.823 88.2565C30.991 88.4245 31.191 88.5565 31.423 88.6525C31.663 88.7405 31.927 88.7845 32.215 88.7845C32.631 88.7845 32.991 88.6885 33.295 88.4965C33.599 88.3045 33.831 88.0405 33.991 87.7045L34.699 88.1845C34.515 88.6005 34.207 88.9445 33.775 89.2165C33.351 89.4805 32.831 89.6125 32.215 89.6125ZM32.155 83.9245C31.891 83.9245 31.647 83.9725 31.423 84.0685C31.199 84.1645 31.003 84.2965 30.835 84.4645C30.675 84.6325 30.547 84.8325 30.451 85.0645C30.363 85.2885 30.319 85.5365 30.319 85.8085V85.8925H33.871V85.7605C33.871 85.4885 33.827 85.2405 33.739 85.0165C33.659 84.7925 33.543 84.6005 33.391 84.4405C33.247 84.2725 33.067 84.1445 32.851 84.0565C32.643 83.9685 32.411 83.9245 32.155 83.9245ZM36.3503 89.4685V83.2765H37.2383V83.9965H37.2863C37.3823 83.7565 37.5183 83.5525 37.6943 83.3845C37.8703 83.2165 38.1303 83.1325 38.4743 83.1325C38.8343 83.1325 39.1023 83.2245 39.2783 83.4085C39.4543 83.5845 39.5623 83.8165 39.6023 84.1045H39.6383C39.7503 83.8245 39.9103 83.5925 40.1183 83.4085C40.3263 83.2245 40.6143 83.1325 40.9823 83.1325C41.4863 83.1325 41.8223 83.3085 41.9903 83.6605C42.1663 84.0125 42.2543 84.5165 42.2543 85.1725V89.4685H41.3663V85.3285C41.3663 84.8005 41.3103 84.4365 41.1983 84.2365C41.0943 84.0285 40.8983 83.9245 40.6103 83.9245C40.3543 83.9245 40.1463 84.0085 39.9863 84.1765C39.8263 84.3365 39.7463 84.5845 39.7463 84.9205V89.4685H38.8583V85.3285C38.8583 84.8005 38.8023 84.4365 38.6903 84.2365C38.5863 84.0285 38.3943 83.9245 38.1143 83.9245C37.8583 83.9245 37.6463 84.0085 37.4783 84.1765C37.3183 84.3365 37.2383 84.5845 37.2383 84.9205V89.4685H36.3503ZM46.8816 81.9085C46.6016 81.9085 46.4056 81.8525 46.2936 81.7405C46.1816 81.6205 46.1256 81.4725 46.1256 81.2965V81.1045C46.1256 80.9285 46.1816 80.7845 46.2936 80.6725C46.4056 80.5525 46.6016 80.4925 46.8816 80.4925C47.1616 80.4925 47.3576 80.5525 47.4696 80.6725C47.5816 80.7845 47.6376 80.9285 47.6376 81.1045V81.2965C47.6376 81.4725 47.5816 81.6205 47.4696 81.7405C47.3576 81.8525 47.1616 81.9085 46.8816 81.9085ZM44.1696 88.6525H46.4016V84.0925H44.1696V83.2765H47.3616V88.6525H49.4496V89.4685H44.1696V88.6525ZM50.8249 89.4685L53.1289 86.3245L50.8849 83.2765H52.0369L52.9729 84.5845L53.7169 85.6165H53.7649L54.4849 84.5845L55.4089 83.2765H56.5129L54.2449 86.3125L56.5729 89.4685H55.4209L54.3769 88.0165L53.6689 87.0325H53.6209L52.9369 88.0165L51.9289 89.4685H50.8249ZM60.9962 89.6125C60.5482 89.6125 60.1442 89.5365 59.7842 89.3845C59.4322 89.2325 59.1282 89.0165 58.8722 88.7365C58.6242 88.4485 58.4322 88.1085 58.2962 87.7165C58.1602 87.3165 58.0922 86.8725 58.0922 86.3845C58.0922 85.8885 58.1602 85.4405 58.2962 85.0405C58.4402 84.6405 58.6362 84.3005 58.8842 84.0205C59.1322 83.7325 59.4282 83.5125 59.7722 83.3605C60.1242 83.2085 60.5122 83.1325 60.9362 83.1325C61.3522 83.1325 61.7282 83.2085 62.0642 83.3605C62.4082 83.5125 62.7002 83.7245 62.9402 83.9965C63.1802 84.2605 63.3642 84.5765 63.4922 84.9445C63.6202 85.3125 63.6842 85.7165 63.6842 86.1565V86.6125H59.1002V86.9005C59.1002 87.1725 59.1442 87.4245 59.2322 87.6565C59.3202 87.8885 59.4442 88.0885 59.6042 88.2565C59.7722 88.4245 59.9722 88.5565 60.2042 88.6525C60.4442 88.7405 60.7082 88.7845 60.9962 88.7845C61.4122 88.7845 61.7722 88.6885 62.0762 88.4965C62.3802 88.3045 62.6122 88.0405 62.7722 87.7045L63.4802 88.1845C63.2962 88.6005 62.9882 88.9445 62.5562 89.2165C62.1322 89.4805 61.6122 89.6125 60.9962 89.6125ZM60.9362 83.9245C60.6722 83.9245 60.4282 83.9725 60.2042 84.0685C59.9802 84.1645 59.7842 84.2965 59.6162 84.4645C59.4562 84.6325 59.3282 84.8325 59.2322 85.0645C59.1442 85.2885 59.1002 85.5365 59.1002 85.8085V85.8925H62.6522V85.7605C62.6522 85.4885 62.6082 85.2405 62.5202 85.0165C62.4402 84.7925 62.3242 84.6005 62.1722 84.4405C62.0282 84.2725 61.8482 84.1445 61.6322 84.0565C61.4242 83.9685 61.1922 83.9245 60.9362 83.9245ZM65.4075 88.6525H67.2195V84.0925H65.4075V83.2765H68.1795V84.8365H68.2395C68.3675 84.3485 68.6075 83.9685 68.9595 83.6965C69.3195 83.4165 69.7755 83.2765 70.3275 83.2765H71.1915V84.2365H70.0275C69.4755 84.2365 69.0275 84.3965 68.6835 84.7165C68.3475 85.0365 68.1795 85.4565 68.1795 85.9765V88.6525H70.5795V89.4685H65.4075V88.6525Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col-lg-4 col-12">
                            <p class="add-content-title text-center">
                              OFFICIALLY RELEASED EDIT
                            </p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M108.505 108.505V217.01C48.5811 217 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                fill="none"
                                height="217"
                                style="position: absolute; top: 0; bottom: 0; right: 0; margin: auto;"
                                viewBox="0 0 109 217"
                                width="109"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  clip-rule="evenodd"
                                  d="M0.504883 108.505V0C60.4286 0 109.01 48.5811 109.01 108.505C109.01 168.429 60.4286 217.01 0.504883 217.01V108.505Z"
                                  fill="#75707B"
                                  fill-rule="evenodd"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="90"
                                viewBox="0 0 93 90"
                                width="93"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M34.5095 1.95898H30.7655L30.5255 5.16298H30.6095C30.8175 4.88298 31.0495 4.66298 31.3055 4.50298C31.5615 4.33498 31.9135 4.25098 32.3615 4.25098C32.7295 4.25098 33.0655 4.31098 33.3695 4.43098C33.6815 4.54298 33.9495 4.71098 34.1735 4.93498C34.3975 5.15898 34.5735 5.43098 34.7015 5.75098C34.8295 6.06298 34.8935 6.42298 34.8935 6.83098C34.8935 7.23898 34.8295 7.61498 34.7015 7.95898C34.5735 8.29498 34.3855 8.58698 34.1375 8.83498C33.8895 9.07498 33.5895 9.26298 33.2375 9.39898C32.8855 9.53498 32.4855 9.60298 32.0375 9.60298C31.6855 9.60298 31.3695 9.56298 31.0895 9.48298C30.8175 9.40298 30.5735 9.29498 30.3575 9.15898C30.1495 9.02298 29.9655 8.87098 29.8055 8.70298C29.6455 8.53498 29.5015 8.35898 29.3735 8.17498L30.1295 7.59898C30.2415 7.76698 30.3535 7.91898 30.4655 8.05498C30.5855 8.19098 30.7215 8.31098 30.8735 8.41498C31.0255 8.51098 31.1975 8.58698 31.3895 8.64298C31.5815 8.69898 31.8055 8.72698 32.0615 8.72698C32.6375 8.72698 33.0775 8.57098 33.3815 8.25898C33.6935 7.94698 33.8495 7.51498 33.8495 6.96298V6.86698C33.8495 6.31498 33.6935 5.88298 33.3815 5.57098C33.0695 5.25898 32.6215 5.10298 32.0375 5.10298C31.6375 5.10298 31.3255 5.17098 31.1015 5.30698C30.8855 5.44298 30.6855 5.61098 30.5015 5.81098L29.6495 5.69098L29.9495 1.08298H34.5095V1.95898ZM39.2928 9.60298C38.7808 9.60298 38.3408 9.50698 37.9728 9.31498C37.6048 9.11498 37.3008 8.83098 37.0608 8.46298C36.8208 8.09498 36.6448 7.64298 36.5328 7.10698C36.4208 6.57098 36.3648 5.95898 36.3648 5.27098C36.3648 4.59098 36.4208 3.98298 36.5328 3.44698C36.6448 2.90298 36.8208 2.44698 37.0608 2.07898C37.3008 1.71098 37.6048 1.43098 37.9728 1.23898C38.3408 1.03898 38.7808 0.938984 39.2928 0.938984C39.8048 0.938984 40.2448 1.03898 40.6128 1.23898C40.9808 1.43098 41.2848 1.71098 41.5248 2.07898C41.7648 2.44698 41.9408 2.90298 42.0528 3.44698C42.1648 3.98298 42.2208 4.59098 42.2208 5.27098C42.2208 5.95898 42.1648 6.57098 42.0528 7.10698C41.9408 7.64298 41.7648 8.09498 41.5248 8.46298C41.2848 8.83098 40.9808 9.11498 40.6128 9.31498C40.2448 9.50698 39.8048 9.60298 39.2928 9.60298ZM39.2928 8.72698C39.6288 8.72698 39.9168 8.66298 40.1568 8.53498C40.3968 8.39898 40.5888 8.21098 40.7328 7.97098C40.8848 7.73098 40.9968 7.44298 41.0688 7.10698C41.1408 6.76298 41.1768 6.37898 41.1768 5.95498V4.58698C41.1768 4.17098 41.1408 3.79098 41.0688 3.44698C40.9968 3.10298 40.8848 2.81098 40.7328 2.57098C40.5888 2.33098 40.3968 2.14698 40.1568 2.01898C39.9168 1.88298 39.6288 1.81498 39.2928 1.81498C38.9568 1.81498 38.6688 1.88298 38.4288 2.01898C38.1888 2.14698 37.9928 2.33098 37.8408 2.57098C37.6968 2.81098 37.5888 3.10298 37.5168 3.44698C37.4448 3.79098 37.4088 4.17098 37.4088 4.58698V5.95498C37.4088 6.37898 37.4448 6.76298 37.5168 7.10698C37.5888 7.44298 37.6968 7.73098 37.8408 7.97098C37.9928 8.21098 38.1888 8.39898 38.4288 8.53498C38.6688 8.66298 38.9568 8.72698 39.2928 8.72698ZM39.2928 5.97898C39.0128 5.97898 38.8168 5.92298 38.7048 5.81098C38.6008 5.69898 38.5488 5.56298 38.5488 5.40298V5.13898C38.5488 4.97898 38.6008 4.84298 38.7048 4.73098C38.8168 4.61898 39.0128 4.56298 39.2928 4.56298C39.5728 4.56298 39.7648 4.61898 39.8688 4.73098C39.9808 4.84298 40.0368 4.97898 40.0368 5.13898V5.40298C40.0368 5.56298 39.9808 5.69898 39.8688 5.81098C39.7648 5.92298 39.5728 5.97898 39.2928 5.97898ZM43.9681 11.115L48.1441 0.338984H49.0081L44.8321 11.115H43.9681ZM56.0954 1.95898H52.3514L52.1114 5.16298H52.1954C52.4034 4.88298 52.6354 4.66298 52.8914 4.50298C53.1474 4.33498 53.4994 4.25098 53.9474 4.25098C54.3154 4.25098 54.6514 4.31098 54.9554 4.43098C55.2674 4.54298 55.5354 4.71098 55.7594 4.93498C55.9834 5.15898 56.1594 5.43098 56.2874 5.75098C56.4154 6.06298 56.4794 6.42298 56.4794 6.83098C56.4794 7.23898 56.4154 7.61498 56.2874 7.95898C56.1594 8.29498 55.9714 8.58698 55.7234 8.83498C55.4754 9.07498 55.1754 9.26298 54.8234 9.39898C54.4714 9.53498 54.0714 9.60298 53.6234 9.60298C53.2714 9.60298 52.9554 9.56298 52.6754 9.48298C52.4034 9.40298 52.1594 9.29498 51.9434 9.15898C51.7354 9.02298 51.5514 8.87098 51.3914 8.70298C51.2314 8.53498 51.0874 8.35898 50.9594 8.17498L51.7154 7.59898C51.8274 7.76698 51.9394 7.91898 52.0514 8.05498C52.1714 8.19098 52.3074 8.31098 52.4594 8.41498C52.6114 8.51098 52.7834 8.58698 52.9754 8.64298C53.1674 8.69898 53.3914 8.72698 53.6474 8.72698C54.2234 8.72698 54.6634 8.57098 54.9674 8.25898C55.2794 7.94698 55.4354 7.51498 55.4354 6.96298V6.86698C55.4354 6.31498 55.2794 5.88298 54.9674 5.57098C54.6554 5.25898 54.2074 5.10298 53.6234 5.10298C53.2234 5.10298 52.9114 5.17098 52.6874 5.30698C52.4714 5.44298 52.2714 5.61098 52.0874 5.81098L51.2354 5.69098L51.5354 1.08298H56.0954V1.95898ZM60.8787 9.60298C60.3667 9.60298 59.9267 9.50698 59.5587 9.31498C59.1907 9.11498 58.8867 8.83098 58.6467 8.46298C58.4067 8.09498 58.2307 7.64298 58.1187 7.10698C58.0067 6.57098 57.9507 5.95898 57.9507 5.27098C57.9507 4.59098 58.0067 3.98298 58.1187 3.44698C58.2307 2.90298 58.4067 2.44698 58.6467 2.07898C58.8867 1.71098 59.1907 1.43098 59.5587 1.23898C59.9267 1.03898 60.3667 0.938984 60.8787 0.938984C61.3907 0.938984 61.8307 1.03898 62.1987 1.23898C62.5667 1.43098 62.8707 1.71098 63.1107 2.07898C63.3507 2.44698 63.5267 2.90298 63.6387 3.44698C63.7507 3.98298 63.8067 4.59098 63.8067 5.27098C63.8067 5.95898 63.7507 6.57098 63.6387 7.10698C63.5267 7.64298 63.3507 8.09498 63.1107 8.46298C62.8707 8.83098 62.5667 9.11498 62.1987 9.31498C61.8307 9.50698 61.3907 9.60298 60.8787 9.60298ZM60.8787 8.72698C61.2147 8.72698 61.5027 8.66298 61.7427 8.53498C61.9827 8.39898 62.1747 8.21098 62.3187 7.97098C62.4707 7.73098 62.5827 7.44298 62.6547 7.10698C62.7267 6.76298 62.7627 6.37898 62.7627 5.95498V4.58698C62.7627 4.17098 62.7267 3.79098 62.6547 3.44698C62.5827 3.10298 62.4707 2.81098 62.3187 2.57098C62.1747 2.33098 61.9827 2.14698 61.7427 2.01898C61.5027 1.88298 61.2147 1.81498 60.8787 1.81498C60.5427 1.81498 60.2547 1.88298 60.0147 2.01898C59.7747 2.14698 59.5787 2.33098 59.4267 2.57098C59.2827 2.81098 59.1747 3.10298 59.1027 3.44698C59.0307 3.79098 58.9947 4.17098 58.9947 4.58698V5.95498C58.9947 6.37898 59.0307 6.76298 59.1027 7.10698C59.1747 7.44298 59.2827 7.73098 59.4267 7.97098C59.5787 8.21098 59.7747 8.39898 60.0147 8.53498C60.2547 8.66298 60.5427 8.72698 60.8787 8.72698ZM60.8787 5.97898C60.5987 5.97898 60.4027 5.92298 60.2907 5.81098C60.1867 5.69898 60.1347 5.56298 60.1347 5.40298V5.13898C60.1347 4.97898 60.1867 4.84298 60.2907 4.73098C60.4027 4.61898 60.5987 4.56298 60.8787 4.56298C61.1587 4.56298 61.3507 4.61898 61.4547 4.73098C61.5667 4.84298 61.6227 4.97898 61.6227 5.13898V5.40298C61.6227 5.56298 61.5667 5.69898 61.4547 5.81098C61.3507 5.92298 61.1587 5.97898 60.8787 5.97898ZM3.3882 29.603C2.7402 29.603 2.1802 29.495 1.7082 29.279C1.2442 29.055 0.848202 28.759 0.520202 28.391L1.1682 27.827C1.4642 28.139 1.7882 28.379 2.1402 28.547C2.4922 28.715 2.9162 28.799 3.4122 28.799C3.8922 28.799 4.2842 28.715 4.5882 28.547C4.9002 28.371 5.0562 28.099 5.0562 27.731C5.0562 27.571 5.0242 27.439 4.9602 27.335C4.9042 27.223 4.8242 27.135 4.7202 27.071C4.6162 27.007 4.5002 26.959 4.3722 26.927C4.2442 26.887 4.1082 26.855 3.9642 26.831L2.9922 26.687C2.7762 26.655 2.5402 26.611 2.2842 26.555C2.0362 26.499 1.8082 26.411 1.6002 26.291C1.3922 26.163 1.2162 25.995 1.0722 25.787C0.936202 25.579 0.868202 25.307 0.868202 24.971C0.868202 24.659 0.928202 24.391 1.0482 24.167C1.1762 23.935 1.3522 23.743 1.5762 23.591C1.8002 23.431 2.0642 23.315 2.3682 23.243C2.6722 23.163 3.0042 23.123 3.3642 23.123C3.9242 23.123 4.4082 23.211 4.8162 23.387C5.2322 23.563 5.5882 23.807 5.8842 24.119L5.2602 24.707C5.1882 24.619 5.0962 24.531 4.9842 24.443C4.8802 24.347 4.7482 24.263 4.5882 24.191C4.4362 24.111 4.2562 24.047 4.0482 23.999C3.8402 23.951 3.6002 23.927 3.3282 23.927C2.8402 23.927 2.4642 24.011 2.2002 24.179C1.9442 24.347 1.8162 24.591 1.8162 24.911C1.8162 25.071 1.8442 25.207 1.9002 25.319C1.9642 25.423 2.0482 25.507 2.1522 25.571C2.2562 25.635 2.3722 25.687 2.5002 25.727C2.6362 25.759 2.7722 25.787 2.9082 25.811L3.8802 25.955C4.1042 25.987 4.3402 26.031 4.5882 26.087C4.8362 26.143 5.0642 26.235 5.2722 26.363C5.4802 26.483 5.6522 26.647 5.7882 26.855C5.9322 27.063 6.0042 27.335 6.0042 27.671C6.0042 28.287 5.7642 28.763 5.2842 29.099C4.8122 29.435 4.1802 29.603 3.3882 29.603ZM8.05151 23.267H9.01151V24.275H9.05951C9.45951 23.507 10.0955 23.123 10.9675 23.123C11.7275 23.123 12.3195 23.407 12.7435 23.975C13.1755 24.543 13.3915 25.339 13.3915 26.363C13.3915 27.387 13.1755 28.183 12.7435 28.751C12.3195 29.319 11.7275 29.603 10.9675 29.603C10.0955 29.603 9.45951 29.219 9.05951 28.451H9.01151V31.859H8.05151V23.267ZM10.5955 28.751C11.1555 28.751 11.5875 28.583 11.8915 28.247C12.2035 27.903 12.3595 27.451 12.3595 26.891V25.835C12.3595 25.275 12.2035 24.827 11.8915 24.491C11.5875 24.147 11.1555 23.975 10.5955 23.975C10.3795 23.975 10.1755 24.003 9.98351 24.059C9.79151 24.115 9.62351 24.199 9.47951 24.311C9.33551 24.415 9.21951 24.547 9.13151 24.707C9.05151 24.859 9.01151 25.039 9.01151 25.247V27.479C9.01151 27.687 9.05151 27.871 9.13151 28.031C9.21951 28.183 9.33551 28.315 9.47951 28.427C9.62351 28.531 9.79151 28.611 9.98351 28.667C10.1755 28.723 10.3795 28.751 10.5955 28.751ZM15.0668 28.643H17.2268V21.395H15.0668V20.579H18.1868V28.643H20.3468V29.459H15.0668V28.643ZM25.2861 21.899C25.0061 21.899 24.8101 21.843 24.6981 21.731C24.5861 21.611 24.5301 21.463 24.5301 21.287V21.095C24.5301 20.919 24.5861 20.775 24.6981 20.663C24.8101 20.543 25.0061 20.483 25.2861 20.483C25.5661 20.483 25.7621 20.543 25.8741 20.663C25.9861 20.775 26.0421 20.919 26.0421 21.095V21.287C26.0421 21.463 25.9861 21.611 25.8741 21.731C25.7621 21.843 25.5661 21.899 25.2861 21.899ZM22.5741 28.643H24.8061V24.083H22.5741V23.267H25.7661V28.643H27.8541V29.459H22.5741V28.643ZM32.3975 29.459C31.9255 29.459 31.5775 29.327 31.3535 29.063C31.1375 28.799 31.0295 28.459 31.0295 28.043V24.083H28.9655V23.267H30.5015C30.7095 23.267 30.8535 23.227 30.9335 23.147C31.0215 23.059 31.0655 22.911 31.0655 22.703V21.083H31.9895V23.267H34.8095V24.083H31.9895V28.643H34.8095V29.459H32.3975ZM44.0281 20.579H44.9881V24.275H45.0361C45.4361 23.507 46.0721 23.123 46.9441 23.123C47.7041 23.123 48.2961 23.407 48.7201 23.975C49.1521 24.543 49.3681 25.339 49.3681 26.363C49.3681 27.387 49.1521 28.183 48.7201 28.751C48.2961 29.319 47.7041 29.603 46.9441 29.603C46.0721 29.603 45.4361 29.219 45.0361 28.451H44.9881V29.459H44.0281V20.579ZM46.5721 28.751C47.1321 28.751 47.5641 28.583 47.8681 28.247C48.1801 27.903 48.3361 27.451 48.3361 26.891V25.835C48.3361 25.275 48.1801 24.827 47.8681 24.491C47.5641 24.147 47.1321 23.975 46.5721 23.975C46.3561 23.975 46.1521 24.003 45.9601 24.059C45.7681 24.115 45.6001 24.199 45.4561 24.311C45.3121 24.415 45.1961 24.547 45.1081 24.707C45.0281 24.859 44.9881 25.039 44.9881 25.247V27.479C44.9881 27.687 45.0281 27.871 45.1081 28.031C45.1961 28.183 45.3121 28.315 45.4561 28.427C45.6001 28.531 45.7681 28.611 45.9601 28.667C46.1521 28.723 46.3561 28.751 46.5721 28.751ZM53.7914 29.603C53.3434 29.603 52.9394 29.527 52.5794 29.375C52.2274 29.223 51.9234 29.007 51.6674 28.727C51.4194 28.439 51.2274 28.099 51.0914 27.707C50.9554 27.307 50.8874 26.863 50.8874 26.375C50.8874 25.879 50.9554 25.431 51.0914 25.031C51.2354 24.631 51.4314 24.291 51.6794 24.011C51.9274 23.723 52.2234 23.503 52.5674 23.351C52.9194 23.199 53.3074 23.123 53.7314 23.123C54.1474 23.123 54.5234 23.199 54.8594 23.351C55.2034 23.503 55.4954 23.715 55.7354 23.987C55.9754 24.251 56.1594 24.567 56.2874 24.935C56.4154 25.303 56.4794 25.707 56.4794 26.147V26.603H51.8954V26.891C51.8954 27.163 51.9394 27.415 52.0274 27.647C52.1154 27.879 52.2394 28.079 52.3994 28.247C52.5674 28.415 52.7674 28.547 52.9994 28.643C53.2394 28.731 53.5034 28.775 53.7914 28.775C54.2074 28.775 54.5674 28.679 54.8714 28.487C55.1754 28.295 55.4074 28.031 55.5674 27.695L56.2754 28.175C56.0914 28.591 55.7834 28.935 55.3514 29.207C54.9274 29.471 54.4074 29.603 53.7914 29.603ZM53.7314 23.915C53.4674 23.915 53.2234 23.963 52.9994 24.059C52.7754 24.155 52.5794 24.287 52.4114 24.455C52.2514 24.623 52.1234 24.823 52.0274 25.055C51.9394 25.279 51.8954 25.527 51.8954 25.799V25.883H55.4474V25.751C55.4474 25.479 55.4034 25.231 55.3154 25.007C55.2354 24.783 55.1194 24.591 54.9674 24.431C54.8234 24.263 54.6434 24.135 54.4274 24.047C54.2194 23.959 53.9874 23.915 53.7314 23.915ZM61.1787 29.459C60.7067 29.459 60.3587 29.327 60.1347 29.063C59.9187 28.799 59.8107 28.459 59.8107 28.043V24.083H57.7467V23.267H59.2827C59.4907 23.267 59.6347 23.227 59.7147 23.147C59.8027 23.059 59.8467 22.911 59.8467 22.703V21.083H60.7707V23.267H63.5907V24.083H60.7707V28.643H63.5907V29.459H61.1787ZM64.834 23.267H65.686L66.394 28.619H66.502L67.558 23.267H68.614L69.67 28.619H69.778L70.486 23.267H71.314L70.366 29.459H69.118L68.134 24.275H68.038L67.03 29.459H65.782L64.834 23.267ZM75.3773 29.603C74.9293 29.603 74.5253 29.527 74.1653 29.375C73.8133 29.223 73.5093 29.007 73.2533 28.727C73.0053 28.439 72.8133 28.099 72.6773 27.707C72.5413 27.307 72.4733 26.863 72.4733 26.375C72.4733 25.879 72.5413 25.431 72.6773 25.031C72.8213 24.631 73.0173 24.291 73.2653 24.011C73.5133 23.723 73.8093 23.503 74.1533 23.351C74.5053 23.199 74.8933 23.123 75.3173 23.123C75.7333 23.123 76.1093 23.199 76.4453 23.351C76.7893 23.503 77.0813 23.715 77.3213 23.987C77.5613 24.251 77.7453 24.567 77.8733 24.935C78.0013 25.303 78.0653 25.707 78.0653 26.147V26.603H73.4813V26.891C73.4813 27.163 73.5253 27.415 73.6133 27.647C73.7013 27.879 73.8253 28.079 73.9853 28.247C74.1533 28.415 74.3533 28.547 74.5853 28.643C74.8253 28.731 75.0893 28.775 75.3773 28.775C75.7933 28.775 76.1533 28.679 76.4573 28.487C76.7613 28.295 76.9933 28.031 77.1533 27.695L77.8613 28.175C77.6773 28.591 77.3693 28.935 76.9373 29.207C76.5133 29.471 75.9933 29.603 75.3773 29.603ZM75.3173 23.915C75.0533 23.915 74.8093 23.963 74.5853 24.059C74.3613 24.155 74.1653 24.287 73.9973 24.455C73.8373 24.623 73.7093 24.823 73.6133 25.055C73.5253 25.279 73.4813 25.527 73.4813 25.799V25.883H77.0333V25.751C77.0333 25.479 76.9893 25.231 76.9013 25.007C76.8213 24.783 76.7053 24.591 76.5533 24.431C76.4093 24.263 76.2293 24.135 76.0133 24.047C75.8053 23.959 75.5733 23.915 75.3173 23.915ZM82.5726 29.603C82.1246 29.603 81.7206 29.527 81.3606 29.375C81.0086 29.223 80.7046 29.007 80.4486 28.727C80.2006 28.439 80.0086 28.099 79.8726 27.707C79.7366 27.307 79.6686 26.863 79.6686 26.375C79.6686 25.879 79.7366 25.431 79.8726 25.031C80.0166 24.631 80.2126 24.291 80.4606 24.011C80.7086 23.723 81.0046 23.503 81.3486 23.351C81.7006 23.199 82.0886 23.123 82.5126 23.123C82.9286 23.123 83.3046 23.199 83.6406 23.351C83.9846 23.503 84.2766 23.715 84.5166 23.987C84.7566 24.251 84.9406 24.567 85.0686 24.935C85.1966 25.303 85.2606 25.707 85.2606 26.147V26.603H80.6766V26.891C80.6766 27.163 80.7206 27.415 80.8086 27.647C80.8966 27.879 81.0206 28.079 81.1806 28.247C81.3486 28.415 81.5486 28.547 81.7806 28.643C82.0206 28.731 82.2846 28.775 82.5726 28.775C82.9886 28.775 83.3486 28.679 83.6526 28.487C83.9566 28.295 84.1886 28.031 84.3486 27.695L85.0566 28.175C84.8726 28.591 84.5646 28.935 84.1326 29.207C83.7086 29.471 83.1886 29.603 82.5726 29.603ZM82.5126 23.915C82.2486 23.915 82.0046 23.963 81.7806 24.059C81.5566 24.155 81.3606 24.287 81.1926 24.455C81.0326 24.623 80.9046 24.823 80.8086 25.055C80.7206 25.279 80.6766 25.527 80.6766 25.799V25.883H84.2286V25.751C84.2286 25.479 84.1846 25.231 84.0966 25.007C84.0166 24.783 83.9006 24.591 83.7486 24.431C83.6046 24.263 83.4246 24.135 83.2086 24.047C83.0006 23.959 82.7686 23.915 82.5126 23.915ZM87.236 29.459V23.267H88.196V24.275H88.244C88.308 24.123 88.388 23.979 88.484 23.843C88.58 23.699 88.696 23.575 88.832 23.471C88.976 23.367 89.144 23.283 89.336 23.219C89.528 23.155 89.752 23.123 90.008 23.123C90.656 23.123 91.176 23.331 91.568 23.747C91.96 24.155 92.156 24.735 92.156 25.487V29.459H91.196V25.655C91.196 25.087 91.072 24.667 90.824 24.395C90.576 24.115 90.212 23.975 89.732 23.975C89.54 23.975 89.352 23.999 89.168 24.047C88.984 24.095 88.82 24.167 88.676 24.263C88.532 24.359 88.416 24.483 88.328 24.635C88.24 24.787 88.196 24.963 88.196 25.163V29.459H87.236ZM21.3045 49.603C20.8725 49.603 20.4805 49.527 20.1285 49.375C19.7845 49.223 19.4885 49.007 19.2405 48.727C19.0005 48.439 18.8165 48.099 18.6885 47.707C18.5605 47.307 18.4965 46.859 18.4965 46.363C18.4965 45.875 18.5605 45.431 18.6885 45.031C18.8165 44.631 19.0005 44.291 19.2405 44.011C19.4885 43.723 19.7845 43.503 20.1285 43.351C20.4805 43.199 20.8725 43.123 21.3045 43.123C21.7365 43.123 22.1245 43.199 22.4685 43.351C22.8205 43.503 23.1165 43.723 23.3565 44.011C23.6045 44.291 23.7925 44.631 23.9205 45.031C24.0485 45.431 24.1125 45.875 24.1125 46.363C24.1125 46.859 24.0485 47.307 23.9205 47.707C23.7925 48.099 23.6045 48.439 23.3565 48.727C23.1165 49.007 22.8205 49.223 22.4685 49.375C22.1245 49.527 21.7365 49.603 21.3045 49.603ZM21.3045 48.775C21.8405 48.775 22.2725 48.615 22.6005 48.295C22.9285 47.975 23.0925 47.479 23.0925 46.807V45.919C23.0925 45.247 22.9285 44.751 22.6005 44.431C22.2725 44.111 21.8405 43.951 21.3045 43.951C20.7685 43.951 20.3365 44.111 20.0085 44.431C19.6805 44.751 19.5165 45.247 19.5165 45.919V46.807C19.5165 47.479 19.6805 47.975 20.0085 48.295C20.3365 48.615 20.7685 48.775 21.3045 48.775ZM25.8238 48.643H27.6358V44.083H25.8238V43.267H28.5958V44.827H28.6558C28.7838 44.339 29.0238 43.959 29.3758 43.687C29.7358 43.407 30.1918 43.267 30.7438 43.267H31.6078V44.227H30.4438C29.8918 44.227 29.4438 44.387 29.0998 44.707C28.7638 45.027 28.5958 45.447 28.5958 45.967V48.643H30.9958V49.459H25.8238V48.643ZM36.0791 41.899C35.7991 41.899 35.6031 41.843 35.4911 41.731C35.3791 41.611 35.3231 41.463 35.3231 41.287V41.095C35.3231 40.919 35.3791 40.775 35.4911 40.663C35.6031 40.543 35.7991 40.483 36.0791 40.483C36.3591 40.483 36.5551 40.543 36.6671 40.663C36.7791 40.775 36.8351 40.919 36.8351 41.095V41.287C36.8351 41.463 36.7791 41.611 36.6671 41.731C36.5551 41.843 36.3591 41.899 36.0791 41.899ZM33.3671 48.643H35.5991V44.083H33.3671V43.267H36.5591V48.643H38.6471V49.459H33.3671V48.643ZM46.0224 50.167C46.0224 50.791 45.7624 51.251 45.2424 51.547C44.7224 51.851 43.9424 52.003 42.9024 52.003C41.9024 52.003 41.1824 51.871 40.7424 51.607C40.3104 51.343 40.0944 50.963 40.0944 50.467C40.0944 50.131 40.1824 49.871 40.3584 49.687C40.5344 49.503 40.7824 49.367 41.1024 49.279V49.135C40.9264 49.047 40.7904 48.935 40.6944 48.799C40.5984 48.663 40.5504 48.491 40.5504 48.283C40.5504 47.963 40.6544 47.723 40.8624 47.563C41.0784 47.403 41.3464 47.283 41.6664 47.203V47.155C41.2824 46.987 40.9824 46.739 40.7664 46.411C40.5584 46.083 40.4544 45.699 40.4544 45.259C40.4544 44.947 40.5104 44.659 40.6224 44.395C40.7344 44.131 40.8944 43.907 41.1024 43.723C41.3184 43.531 41.5744 43.383 41.8704 43.279C42.1664 43.175 42.4944 43.123 42.8544 43.123C43.3184 43.123 43.7264 43.207 44.0784 43.375V43.267C44.0784 43.027 44.1344 42.827 44.2464 42.667C44.3584 42.507 44.5504 42.427 44.8224 42.427H45.9624V43.267H44.5704V43.687C44.7944 43.879 44.9664 44.107 45.0864 44.371C45.2064 44.635 45.2664 44.931 45.2664 45.259C45.2664 45.571 45.2064 45.859 45.0864 46.123C44.9744 46.387 44.8144 46.615 44.6064 46.807C44.3984 46.991 44.1424 47.135 43.8384 47.239C43.5424 47.343 43.2144 47.395 42.8544 47.395C42.7504 47.395 42.6504 47.391 42.5544 47.383C42.4584 47.375 42.3624 47.363 42.2664 47.347C42.1704 47.363 42.0704 47.391 41.9664 47.431C41.8624 47.463 41.7664 47.511 41.6784 47.575C41.5904 47.631 41.5184 47.699 41.4624 47.779C41.4064 47.859 41.3784 47.951 41.3784 48.055C41.3784 48.239 41.4704 48.363 41.6544 48.427C41.8384 48.483 42.0784 48.511 42.3744 48.511H43.7424C44.5424 48.511 45.1224 48.663 45.4824 48.967C45.8424 49.263 46.0224 49.663 46.0224 50.167ZM45.1224 50.215C45.1224 49.967 45.0224 49.767 44.8224 49.615C44.6224 49.471 44.2744 49.399 43.7784 49.399H41.6304C41.2144 49.567 41.0064 49.847 41.0064 50.239C41.0064 50.511 41.1144 50.743 41.3304 50.935C41.5464 51.135 41.9064 51.235 42.4104 51.235H43.3464C43.9064 51.235 44.3424 51.147 44.6544 50.971C44.9664 50.803 45.1224 50.551 45.1224 50.215ZM42.8544 46.651C43.3344 46.651 43.6864 46.539 43.9104 46.315C44.1424 46.091 44.2584 45.795 44.2584 45.427V45.079C44.2584 44.711 44.1424 44.419 43.9104 44.203C43.6864 43.979 43.3344 43.867 42.8544 43.867C42.3744 43.867 42.0224 43.979 41.7984 44.203C41.5744 44.419 41.4624 44.711 41.4624 45.079V45.427C41.4624 45.795 41.5744 46.091 41.7984 46.315C42.0224 46.539 42.3744 46.651 42.8544 46.651ZM50.4697 41.899C50.1897 41.899 49.9937 41.843 49.8817 41.731C49.7697 41.611 49.7137 41.463 49.7137 41.287V41.095C49.7137 40.919 49.7697 40.775 49.8817 40.663C49.9937 40.543 50.1897 40.483 50.4697 40.483C50.7497 40.483 50.9457 40.543 51.0577 40.663C51.1697 40.775 51.2257 40.919 51.2257 41.095V41.287C51.2257 41.463 51.1697 41.611 51.0577 41.731C50.9457 41.843 50.7497 41.899 50.4697 41.899ZM47.7577 48.643H49.9897V44.083H47.7577V43.267H50.9497V48.643H53.0377V49.459H47.7577V48.643ZM54.857 49.459V43.267H55.817V44.275H55.865C55.929 44.123 56.009 43.979 56.105 43.843C56.201 43.699 56.317 43.575 56.453 43.471C56.597 43.367 56.765 43.283 56.957 43.219C57.149 43.155 57.373 43.123 57.629 43.123C58.277 43.123 58.797 43.331 59.189 43.747C59.581 44.155 59.777 44.735 59.777 45.487V49.459H58.817V45.655C58.817 45.087 58.693 44.667 58.445 44.395C58.197 44.115 57.833 43.975 57.353 43.975C57.161 43.975 56.973 43.999 56.789 44.047C56.605 44.095 56.441 44.167 56.297 44.263C56.153 44.359 56.037 44.483 55.949 44.635C55.861 44.787 55.817 44.963 55.817 45.163V49.459H54.857ZM66.8164 49.459C66.4404 49.459 66.1724 49.363 66.0124 49.171C65.8524 48.979 65.7524 48.739 65.7124 48.451H65.6524C65.5164 48.811 65.2964 49.095 64.9924 49.303C64.6964 49.503 64.2964 49.603 63.7924 49.603C63.1444 49.603 62.6284 49.435 62.2444 49.099C61.8604 48.763 61.6684 48.303 61.6684 47.719C61.6684 47.143 61.8764 46.699 62.2924 46.387C62.7164 46.075 63.3964 45.919 64.3324 45.919H65.6524V45.307C65.6524 44.851 65.5244 44.511 65.2684 44.287C65.0124 44.055 64.6484 43.939 64.1764 43.939C63.7604 43.939 63.4204 44.023 63.1564 44.191C62.8924 44.351 62.6804 44.571 62.5204 44.851L61.8724 44.371C61.9524 44.211 62.0604 44.055 62.1964 43.903C62.3324 43.751 62.5004 43.619 62.7004 43.507C62.9004 43.387 63.1284 43.295 63.3844 43.231C63.6404 43.159 63.9244 43.123 64.2364 43.123C64.9644 43.123 65.5404 43.307 65.9644 43.675C66.3964 44.043 66.6124 44.555 66.6124 45.211V48.619H67.4764V49.459H66.8164ZM63.9604 48.799C64.2084 48.799 64.4324 48.771 64.6324 48.715C64.8404 48.651 65.0204 48.571 65.1724 48.475C65.3244 48.371 65.4404 48.251 65.5204 48.115C65.6084 47.971 65.6524 47.819 65.6524 47.659V46.639H64.3324C63.7564 46.639 63.3364 46.719 63.0724 46.879C62.8084 47.039 62.6764 47.271 62.6764 47.575V47.827C62.6764 48.147 62.7884 48.391 63.0124 48.559C63.2444 48.719 63.5604 48.799 63.9604 48.799ZM69.0317 48.643H71.1917V41.395H69.0317V40.579H72.1517V48.643H74.3117V49.459H69.0317V48.643ZM5.6562 69.459C5.2802 69.459 5.0122 69.363 4.8522 69.171C4.6922 68.979 4.5922 68.739 4.5522 68.451H4.4922C4.3562 68.811 4.1362 69.095 3.8322 69.303C3.5362 69.503 3.1362 69.603 2.6322 69.603C1.9842 69.603 1.4682 69.435 1.0842 69.099C0.700202 68.763 0.508202 68.303 0.508202 67.719C0.508202 67.143 0.716202 66.699 1.1322 66.387C1.5562 66.075 2.2362 65.919 3.1722 65.919H4.4922V65.307C4.4922 64.851 4.3642 64.511 4.1082 64.287C3.8522 64.055 3.4882 63.939 3.0162 63.939C2.6002 63.939 2.2602 64.023 1.9962 64.191C1.7322 64.351 1.5202 64.571 1.3602 64.851L0.712202 64.371C0.792202 64.211 0.900202 64.055 1.0362 63.903C1.1722 63.751 1.3402 63.619 1.5402 63.507C1.7402 63.387 1.9682 63.295 2.2242 63.231C2.4802 63.159 2.7642 63.123 3.0762 63.123C3.8042 63.123 4.3802 63.307 4.8042 63.675C5.2362 64.043 5.4522 64.555 5.4522 65.211V68.619H6.3162V69.459H5.6562ZM2.8002 68.799C3.0482 68.799 3.2722 68.771 3.4722 68.715C3.6802 68.651 3.8602 68.571 4.0122 68.475C4.1642 68.371 4.2802 68.251 4.3602 68.115C4.4482 67.971 4.4922 67.819 4.4922 67.659V66.639H3.1722C2.5962 66.639 2.1762 66.719 1.9122 66.879C1.6482 67.039 1.5162 67.271 1.5162 67.575V67.827C1.5162 68.147 1.6282 68.391 1.8522 68.559C2.0842 68.719 2.4002 68.799 2.8002 68.799ZM7.83551 68.643H9.64751V64.083H7.83551V63.267H10.6075V64.827H10.6675C10.7955 64.339 11.0355 63.959 11.3875 63.687C11.7475 63.407 12.2035 63.267 12.7555 63.267H13.6195V64.227H12.4555C11.9035 64.227 11.4555 64.387 11.1115 64.707C10.7755 65.027 10.6075 65.447 10.6075 65.967V68.643H13.0075V69.459H7.83551V68.643ZM18.0068 69.459C17.5348 69.459 17.1868 69.327 16.9628 69.063C16.7468 68.799 16.6388 68.459 16.6388 68.043V64.083H14.5748V63.267H16.1108C16.3188 63.267 16.4628 63.227 16.5428 63.147C16.6308 63.059 16.6748 62.911 16.6748 62.703V61.083H17.5988V63.267H20.4188V64.083H17.5988V68.643H20.4188V69.459H18.0068ZM25.2861 61.899C25.0061 61.899 24.8101 61.843 24.6981 61.731C24.5861 61.611 24.5301 61.463 24.5301 61.287V61.095C24.5301 60.919 24.5861 60.775 24.6981 60.663C24.8101 60.543 25.0061 60.483 25.2861 60.483C25.5661 60.483 25.7621 60.543 25.8741 60.663C25.9861 60.775 26.0421 60.919 26.0421 61.095V61.287C26.0421 61.463 25.9861 61.611 25.8741 61.731C25.7621 61.843 25.5661 61.899 25.2861 61.899ZM22.5741 68.643H24.8061V64.083H22.5741V63.267H25.7661V68.643H27.8541V69.459H22.5741V68.643ZM32.1695 69.603C31.5215 69.603 30.9615 69.495 30.4895 69.279C30.0255 69.055 29.6295 68.759 29.3015 68.391L29.9495 67.827C30.2455 68.139 30.5695 68.379 30.9215 68.547C31.2735 68.715 31.6975 68.799 32.1935 68.799C32.6735 68.799 33.0655 68.715 33.3695 68.547C33.6815 68.371 33.8375 68.099 33.8375 67.731C33.8375 67.571 33.8055 67.439 33.7415 67.335C33.6855 67.223 33.6055 67.135 33.5015 67.071C33.3975 67.007 33.2815 66.959 33.1535 66.927C33.0255 66.887 32.8895 66.855 32.7455 66.831L31.7735 66.687C31.5575 66.655 31.3215 66.611 31.0655 66.555C30.8175 66.499 30.5895 66.411 30.3815 66.291C30.1735 66.163 29.9975 65.995 29.8535 65.787C29.7175 65.579 29.6495 65.307 29.6495 64.971C29.6495 64.659 29.7095 64.391 29.8295 64.167C29.9575 63.935 30.1335 63.743 30.3575 63.591C30.5815 63.431 30.8455 63.315 31.1495 63.243C31.4535 63.163 31.7855 63.123 32.1455 63.123C32.7055 63.123 33.1895 63.211 33.5975 63.387C34.0135 63.563 34.3695 63.807 34.6655 64.119L34.0415 64.707C33.9695 64.619 33.8775 64.531 33.7655 64.443C33.6615 64.347 33.5295 64.263 33.3695 64.191C33.2175 64.111 33.0375 64.047 32.8295 63.999C32.6215 63.951 32.3815 63.927 32.1095 63.927C31.6215 63.927 31.2455 64.011 30.9815 64.179C30.7255 64.347 30.5975 64.591 30.5975 64.911C30.5975 65.071 30.6255 65.207 30.6815 65.319C30.7455 65.423 30.8295 65.507 30.9335 65.571C31.0375 65.635 31.1535 65.687 31.2815 65.727C31.4175 65.759 31.5535 65.787 31.6895 65.811L32.6615 65.955C32.8855 65.987 33.1215 66.031 33.3695 66.087C33.6175 66.143 33.8455 66.235 34.0535 66.363C34.2615 66.483 34.4335 66.647 34.5695 66.855C34.7135 67.063 34.7855 67.335 34.7855 67.671C34.7855 68.287 34.5455 68.763 34.0655 69.099C33.5935 69.435 32.9615 69.603 32.1695 69.603ZM39.5928 69.459C39.1208 69.459 38.7728 69.327 38.5488 69.063C38.3328 68.799 38.2248 68.459 38.2248 68.043V64.083H36.1608V63.267H37.6968C37.9048 63.267 38.0488 63.227 38.1288 63.147C38.2168 63.059 38.2608 62.911 38.2608 62.703V61.083H39.1848V63.267H42.0048V64.083H39.1848V68.643H42.0048V69.459H39.5928ZM52.6874 69.603C52.3194 69.603 51.9914 69.543 51.7034 69.423C51.4234 69.303 51.1834 69.139 50.9834 68.931C50.7914 68.715 50.6434 68.467 50.5394 68.187C50.4354 67.907 50.3834 67.607 50.3834 67.287C50.3834 67.079 50.4074 66.863 50.4554 66.639C50.5034 66.415 50.5874 66.199 50.7074 65.991C50.8274 65.775 50.9834 65.571 51.1754 65.379C51.3754 65.179 51.6274 65.003 51.9314 64.851C51.7074 64.563 51.5194 64.267 51.3674 63.963C51.2234 63.659 51.1514 63.327 51.1514 62.967C51.1514 62.663 51.2074 62.387 51.3194 62.139C51.4394 61.891 51.5954 61.679 51.7874 61.503C51.9874 61.319 52.2194 61.179 52.4834 61.083C52.7474 60.987 53.0274 60.939 53.3234 60.939C53.5874 60.939 53.8274 60.979 54.0434 61.059C54.2674 61.131 54.4634 61.227 54.6314 61.347C54.7994 61.467 54.9394 61.603 55.0514 61.755C55.1714 61.907 55.2594 62.059 55.3154 62.211L54.5234 62.619C54.4194 62.371 54.2634 62.167 54.0554 62.007C53.8474 61.839 53.5874 61.755 53.2754 61.755C52.9154 61.755 52.6274 61.867 52.4114 62.091C52.2034 62.307 52.0994 62.587 52.0994 62.931V63.027C52.0994 63.155 52.1154 63.279 52.1474 63.399C52.1794 63.519 52.2274 63.647 52.2914 63.783C52.3634 63.911 52.4514 64.051 52.5554 64.203C52.6674 64.355 52.7994 64.527 52.9514 64.719L54.0314 66.051L54.9074 67.131H54.9674C55.0234 66.819 55.0594 66.463 55.0754 66.063C55.0914 65.663 55.1074 65.271 55.1234 64.887H56.8154V65.691H55.9154C55.8914 65.883 55.8674 66.063 55.8434 66.231C55.8194 66.399 55.7914 66.563 55.7594 66.723C55.7274 66.883 55.6914 67.047 55.6514 67.215C55.6114 67.375 55.5554 67.547 55.4834 67.731L56.9474 69.459H55.8074L54.7634 68.223H54.7034C54.5914 68.639 54.3634 68.975 54.0194 69.231C53.6754 69.479 53.2314 69.603 52.6874 69.603ZM52.9394 68.751C53.2834 68.751 53.5874 68.679 53.8514 68.535C54.1154 68.391 54.3234 68.191 54.4754 67.935L52.3874 65.415C52.0194 65.647 51.7594 65.911 51.6074 66.207C51.4554 66.495 51.3794 66.811 51.3794 67.155V67.335C51.3794 67.767 51.5234 68.111 51.8114 68.367C52.0994 68.623 52.4754 68.751 52.9394 68.751ZM68.182 69.603C67.734 69.603 67.33 69.527 66.97 69.375C66.618 69.223 66.314 69.007 66.058 68.727C65.81 68.439 65.618 68.099 65.482 67.707C65.346 67.307 65.278 66.863 65.278 66.375C65.278 65.879 65.346 65.431 65.482 65.031C65.626 64.631 65.822 64.291 66.07 64.011C66.318 63.723 66.614 63.503 66.958 63.351C67.31 63.199 67.698 63.123 68.122 63.123C68.538 63.123 68.914 63.199 69.25 63.351C69.594 63.503 69.886 63.715 70.126 63.987C70.366 64.251 70.55 64.567 70.678 64.935C70.806 65.303 70.87 65.707 70.87 66.147V66.603H66.286V66.891C66.286 67.163 66.33 67.415 66.418 67.647C66.506 67.879 66.63 68.079 66.79 68.247C66.958 68.415 67.158 68.547 67.39 68.643C67.63 68.731 67.894 68.775 68.182 68.775C68.598 68.775 68.958 68.679 69.262 68.487C69.566 68.295 69.798 68.031 69.958 67.695L70.666 68.175C70.482 68.591 70.174 68.935 69.742 69.207C69.318 69.471 68.798 69.603 68.182 69.603ZM68.122 63.915C67.858 63.915 67.614 63.963 67.39 64.059C67.166 64.155 66.97 64.287 66.802 64.455C66.642 64.623 66.514 64.823 66.418 65.055C66.33 65.279 66.286 65.527 66.286 65.799V65.883H69.838V65.751C69.838 65.479 69.794 65.231 69.706 65.007C69.626 64.783 69.51 64.591 69.358 64.431C69.214 64.263 69.034 64.135 68.818 64.047C68.61 63.959 68.378 63.915 68.122 63.915ZM76.7693 68.451H76.7213C76.3213 69.219 75.6853 69.603 74.8133 69.603C74.0533 69.603 73.4573 69.319 73.0253 68.751C72.6013 68.183 72.3893 67.387 72.3893 66.363C72.3893 65.339 72.6013 64.543 73.0253 63.975C73.4573 63.407 74.0533 63.123 74.8133 63.123C75.6853 63.123 76.3213 63.507 76.7213 64.275H76.7693V60.579H77.7293V69.459H76.7693V68.451ZM75.1853 68.751C75.4013 68.751 75.6053 68.723 75.7973 68.667C75.9893 68.611 76.1573 68.531 76.3013 68.427C76.4453 68.315 76.5573 68.183 76.6373 68.031C76.7253 67.871 76.7693 67.687 76.7693 67.479V65.247C76.7693 65.039 76.7253 64.859 76.6373 64.707C76.5573 64.547 76.4453 64.415 76.3013 64.311C76.1573 64.199 75.9893 64.115 75.7973 64.059C75.6053 64.003 75.4013 63.975 75.1853 63.975C74.6253 63.975 74.1893 64.147 73.8773 64.491C73.5733 64.827 73.4213 65.275 73.4213 65.835V66.891C73.4213 67.451 73.5733 67.903 73.8773 68.247C74.1893 68.583 74.6253 68.751 75.1853 68.751ZM82.8486 61.899C82.5686 61.899 82.3726 61.843 82.2606 61.731C82.1486 61.611 82.0926 61.463 82.0926 61.287V61.095C82.0926 60.919 82.1486 60.775 82.2606 60.663C82.3726 60.543 82.5686 60.483 82.8486 60.483C83.1286 60.483 83.3246 60.543 83.4366 60.663C83.5486 60.775 83.6046 60.919 83.6046 61.095V61.287C83.6046 61.463 83.5486 61.611 83.4366 61.731C83.3246 61.843 83.1286 61.899 82.8486 61.899ZM80.1366 68.643H82.3686V64.083H80.1366V63.267H83.3286V68.643H85.4166V69.459H80.1366V68.643ZM89.96 69.459C89.488 69.459 89.14 69.327 88.916 69.063C88.7 68.799 88.592 68.459 88.592 68.043V64.083H86.528V63.267H88.064C88.272 63.267 88.416 63.227 88.496 63.147C88.584 63.059 88.628 62.911 88.628 62.703V61.083H89.552V63.267H92.372V64.083H89.552V68.643H92.372V69.459H89.96ZM18.8445 83.267H19.8045V84.275H19.8525C20.2525 83.507 20.8885 83.123 21.7605 83.123C22.5205 83.123 23.1125 83.407 23.5365 83.975C23.9685 84.543 24.1845 85.339 24.1845 86.363C24.1845 87.387 23.9685 88.183 23.5365 88.751C23.1125 89.319 22.5205 89.603 21.7605 89.603C20.8885 89.603 20.2525 89.219 19.8525 88.451H19.8045V91.859H18.8445V83.267ZM21.3885 88.751C21.9485 88.751 22.3805 88.583 22.6845 88.247C22.9965 87.903 23.1525 87.451 23.1525 86.891V85.835C23.1525 85.275 22.9965 84.827 22.6845 84.491C22.3805 84.147 21.9485 83.975 21.3885 83.975C21.1725 83.975 20.9685 84.003 20.7765 84.059C20.5845 84.115 20.4165 84.199 20.2725 84.311C20.1285 84.415 20.0125 84.547 19.9245 84.707C19.8445 84.859 19.8045 85.039 19.8045 85.247V87.479C19.8045 87.687 19.8445 87.871 19.9245 88.031C20.0125 88.183 20.1285 88.315 20.2725 88.427C20.4165 88.531 20.5845 88.611 20.7765 88.667C20.9685 88.723 21.1725 88.751 21.3885 88.751ZM25.8238 88.643H27.6358V84.083H25.8238V83.267H28.5958V84.827H28.6558C28.7838 84.339 29.0238 83.959 29.3758 83.687C29.7358 83.407 30.1918 83.267 30.7438 83.267H31.6078V84.227H30.4438C29.8918 84.227 29.4438 84.387 29.0998 84.707C28.7638 85.027 28.5958 85.447 28.5958 85.967V88.643H30.9958V89.459H25.8238V88.643ZM35.6951 89.603C35.2631 89.603 34.8711 89.527 34.5191 89.375C34.1751 89.223 33.8791 89.007 33.6311 88.727C33.3911 88.439 33.2071 88.099 33.0791 87.707C32.9511 87.307 32.8871 86.859 32.8871 86.363C32.8871 85.875 32.9511 85.431 33.0791 85.031C33.2071 84.631 33.3911 84.291 33.6311 84.011C33.8791 83.723 34.1751 83.503 34.5191 83.351C34.8711 83.199 35.2631 83.123 35.6951 83.123C36.1271 83.123 36.5151 83.199 36.8591 83.351C37.2111 83.503 37.5071 83.723 37.7471 84.011C37.9951 84.291 38.1831 84.631 38.3111 85.031C38.4391 85.431 38.5031 85.875 38.5031 86.363C38.5031 86.859 38.4391 87.307 38.3111 87.707C38.1831 88.099 37.9951 88.439 37.7471 88.727C37.5071 89.007 37.2111 89.223 36.8591 89.375C36.5151 89.527 36.1271 89.603 35.6951 89.603ZM35.6951 88.775C36.2311 88.775 36.6631 88.615 36.9911 88.295C37.3191 87.975 37.4831 87.479 37.4831 86.807V85.919C37.4831 85.247 37.3191 84.751 36.9911 84.431C36.6631 84.111 36.2311 83.951 35.6951 83.951C35.1591 83.951 34.7271 84.111 34.3991 84.431C34.0711 84.751 33.9071 85.247 33.9071 85.919V86.807C33.9071 87.479 34.0711 87.975 34.3991 88.295C34.7271 88.615 35.1591 88.775 35.6951 88.775ZM44.3904 88.451H44.3424C43.9424 89.219 43.3064 89.603 42.4344 89.603C41.6744 89.603 41.0784 89.319 40.6464 88.751C40.2224 88.183 40.0104 87.387 40.0104 86.363C40.0104 85.339 40.2224 84.543 40.6464 83.975C41.0784 83.407 41.6744 83.123 42.4344 83.123C43.3064 83.123 43.9424 83.507 44.3424 84.275H44.3904V80.579H45.3504V89.459H44.3904V88.451ZM42.8064 88.751C43.0224 88.751 43.2264 88.723 43.4184 88.667C43.6104 88.611 43.7784 88.531 43.9224 88.427C44.0664 88.315 44.1784 88.183 44.2584 88.031C44.3464 87.871 44.3904 87.687 44.3904 87.479V85.247C44.3904 85.039 44.3464 84.859 44.2584 84.707C44.1784 84.547 44.0664 84.415 43.9224 84.311C43.7784 84.199 43.6104 84.115 43.4184 84.059C43.2264 84.003 43.0224 83.975 42.8064 83.975C42.2464 83.975 41.8104 84.147 41.4984 84.491C41.1944 84.827 41.0424 85.275 41.0424 85.835V86.891C41.0424 87.451 41.1944 87.903 41.4984 88.247C41.8104 88.583 42.2464 88.751 42.8064 88.751ZM51.5497 88.451H51.5017C51.4377 88.603 51.3577 88.751 51.2617 88.895C51.1657 89.031 51.0457 89.151 50.9017 89.255C50.7657 89.359 50.6017 89.443 50.4097 89.507C50.2177 89.571 49.9937 89.603 49.7377 89.603C49.0897 89.603 48.5697 89.399 48.1777 88.991C47.7857 88.575 47.5897 87.991 47.5897 87.239V83.267H48.5497V87.071C48.5497 87.639 48.6737 88.063 48.9217 88.343C49.1697 88.615 49.5337 88.751 50.0137 88.751C50.2057 88.751 50.3937 88.727 50.5777 88.679C50.7617 88.631 50.9257 88.559 51.0697 88.463C51.2137 88.367 51.3297 88.247 51.4177 88.103C51.5057 87.951 51.5497 87.771 51.5497 87.563V83.267H52.5097V89.459H51.5497V88.451ZM57.497 89.603C57.049 89.603 56.649 89.527 56.297 89.375C55.953 89.215 55.661 88.995 55.421 88.715C55.181 88.435 54.997 88.095 54.869 87.695C54.749 87.295 54.689 86.851 54.689 86.363C54.689 85.875 54.753 85.431 54.881 85.031C55.009 84.631 55.193 84.291 55.433 84.011C55.673 83.723 55.965 83.503 56.309 83.351C56.653 83.199 57.045 83.123 57.485 83.123C58.085 83.123 58.573 83.255 58.949 83.519C59.325 83.783 59.601 84.127 59.777 84.551L59.009 84.959C58.897 84.639 58.709 84.391 58.445 84.215C58.189 84.039 57.869 83.951 57.485 83.951C57.205 83.951 56.953 83.999 56.729 84.095C56.513 84.183 56.329 84.311 56.177 84.479C56.025 84.647 55.909 84.847 55.829 85.079C55.757 85.311 55.721 85.563 55.721 85.835V86.891C55.721 87.163 55.757 87.415 55.829 87.647C55.909 87.879 56.025 88.079 56.177 88.247C56.329 88.415 56.517 88.547 56.741 88.643C56.965 88.731 57.221 88.775 57.509 88.775C57.925 88.775 58.269 88.679 58.541 88.487C58.813 88.295 59.029 88.031 59.189 87.695L59.873 88.163C59.689 88.579 59.401 88.923 59.009 89.195C58.625 89.467 58.121 89.603 57.497 89.603ZM64.5844 89.603C64.1364 89.603 63.7324 89.527 63.3724 89.375C63.0204 89.223 62.7164 89.007 62.4604 88.727C62.2124 88.439 62.0204 88.099 61.8844 87.707C61.7484 87.307 61.6804 86.863 61.6804 86.375C61.6804 85.879 61.7484 85.431 61.8844 85.031C62.0284 84.631 62.2244 84.291 62.4724 84.011C62.7204 83.723 63.0164 83.503 63.3604 83.351C63.7124 83.199 64.1004 83.123 64.5244 83.123C64.9404 83.123 65.3164 83.199 65.6524 83.351C65.9964 83.503 66.2884 83.715 66.5284 83.987C66.7684 84.251 66.9524 84.567 67.0804 84.935C67.2084 85.303 67.2724 85.707 67.2724 86.147V86.603H62.6884V86.891C62.6884 87.163 62.7324 87.415 62.8204 87.647C62.9084 87.879 63.0324 88.079 63.1924 88.247C63.3604 88.415 63.5604 88.547 63.7924 88.643C64.0324 88.731 64.2964 88.775 64.5844 88.775C65.0004 88.775 65.3604 88.679 65.6644 88.487C65.9684 88.295 66.2004 88.031 66.3604 87.695L67.0684 88.175C66.8844 88.591 66.5764 88.935 66.1444 89.207C65.7204 89.471 65.2004 89.603 64.5844 89.603ZM64.5244 83.915C64.2604 83.915 64.0164 83.963 63.7924 84.059C63.5684 84.155 63.3724 84.287 63.2044 84.455C63.0444 84.623 62.9164 84.823 62.8204 85.055C62.7324 85.279 62.6884 85.527 62.6884 85.799V85.883H66.2404V85.751C66.2404 85.479 66.1964 85.231 66.1084 85.007C66.0284 84.783 65.9124 84.591 65.7604 84.431C65.6164 84.263 65.4364 84.135 65.2204 84.047C65.0124 83.959 64.7804 83.915 64.5244 83.915ZM68.9957 88.643H70.8077V84.083H68.9957V83.267H71.7677V84.827H71.8277C71.9557 84.339 72.1957 83.959 72.5477 83.687C72.9077 83.407 73.3637 83.267 73.9157 83.267H74.7797V84.227H73.6157C73.0637 84.227 72.6157 84.387 72.2717 84.707C71.9357 85.027 71.7677 85.447 71.7677 85.967V88.643H74.1677V89.459H68.9957V88.643Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col-lg-4 col-12">
                            <p class="add-content-title text-center">
                              UNOFFICIAL EDIT
                            </p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                style="position: relative;"
                                viewBox="0 0 217 217"
                                width="217"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M108.505 108.505V0C168.429 0 217.01 48.5811 217.01 108.505C217.01 168.429 168.429 217.01 108.505 217.01C48.5811 217.01 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="50"
                                viewBox="0 0 79 50"
                                width="79"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M26.1249 9.45898V8.58298H28.5249V1.82698H28.4409L26.3289 3.79498L25.7409 3.15898L27.9609 1.08298H29.5329V8.58298H31.7409V9.45898H26.1249ZM35.9002 9.60298C35.3882 9.60298 34.9482 9.50698 34.5802 9.31498C34.2122 9.11498 33.9082 8.83098 33.6682 8.46298C33.4282 8.09498 33.2522 7.64298 33.1402 7.10698C33.0282 6.57098 32.9722 5.95898 32.9722 5.27098C32.9722 4.59098 33.0282 3.98298 33.1402 3.44698C33.2522 2.90298 33.4282 2.44698 33.6682 2.07898C33.9082 1.71098 34.2122 1.43098 34.5802 1.23898C34.9482 1.03898 35.3882 0.938984 35.9002 0.938984C36.4122 0.938984 36.8522 1.03898 37.2202 1.23898C37.5882 1.43098 37.8922 1.71098 38.1322 2.07898C38.3722 2.44698 38.5482 2.90298 38.6602 3.44698C38.7722 3.98298 38.8282 4.59098 38.8282 5.27098C38.8282 5.95898 38.7722 6.57098 38.6602 7.10698C38.5482 7.64298 38.3722 8.09498 38.1322 8.46298C37.8922 8.83098 37.5882 9.11498 37.2202 9.31498C36.8522 9.50698 36.4122 9.60298 35.9002 9.60298ZM35.9002 8.72698C36.2362 8.72698 36.5242 8.66298 36.7642 8.53498C37.0042 8.39898 37.1962 8.21098 37.3402 7.97098C37.4922 7.73098 37.6042 7.44298 37.6762 7.10698C37.7482 6.76298 37.7842 6.37898 37.7842 5.95498V4.58698C37.7842 4.17098 37.7482 3.79098 37.6762 3.44698C37.6042 3.10298 37.4922 2.81098 37.3402 2.57098C37.1962 2.33098 37.0042 2.14698 36.7642 2.01898C36.5242 1.88298 36.2362 1.81498 35.9002 1.81498C35.5642 1.81498 35.2762 1.88298 35.0362 2.01898C34.7962 2.14698 34.6002 2.33098 34.4482 2.57098C34.3042 2.81098 34.1962 3.10298 34.1242 3.44698C34.0522 3.79098 34.0162 4.17098 34.0162 4.58698V5.95498C34.0162 6.37898 34.0522 6.76298 34.1242 7.10698C34.1962 7.44298 34.3042 7.73098 34.4482 7.97098C34.6002 8.21098 34.7962 8.39898 35.0362 8.53498C35.2762 8.66298 35.5642 8.72698 35.9002 8.72698ZM35.9002 5.97898C35.6202 5.97898 35.4242 5.92298 35.3122 5.81098C35.2082 5.69898 35.1562 5.56298 35.1562 5.40298V5.13898C35.1562 4.97898 35.2082 4.84298 35.3122 4.73098C35.4242 4.61898 35.6202 4.56298 35.9002 4.56298C36.1802 4.56298 36.3722 4.61898 36.4762 4.73098C36.5882 4.84298 36.6442 4.97898 36.6442 5.13898V5.40298C36.6442 5.56298 36.5882 5.69898 36.4762 5.81098C36.3722 5.92298 36.1802 5.97898 35.9002 5.97898ZM43.0955 9.60298C42.5835 9.60298 42.1435 9.50698 41.7755 9.31498C41.4075 9.11498 41.1035 8.83098 40.8635 8.46298C40.6235 8.09498 40.4475 7.64298 40.3355 7.10698C40.2235 6.57098 40.1675 5.95898 40.1675 5.27098C40.1675 4.59098 40.2235 3.98298 40.3355 3.44698C40.4475 2.90298 40.6235 2.44698 40.8635 2.07898C41.1035 1.71098 41.4075 1.43098 41.7755 1.23898C42.1435 1.03898 42.5835 0.938984 43.0955 0.938984C43.6075 0.938984 44.0475 1.03898 44.4155 1.23898C44.7835 1.43098 45.0875 1.71098 45.3275 2.07898C45.5675 2.44698 45.7435 2.90298 45.8555 3.44698C45.9675 3.98298 46.0235 4.59098 46.0235 5.27098C46.0235 5.95898 45.9675 6.57098 45.8555 7.10698C45.7435 7.64298 45.5675 8.09498 45.3275 8.46298C45.0875 8.83098 44.7835 9.11498 44.4155 9.31498C44.0475 9.50698 43.6075 9.60298 43.0955 9.60298ZM43.0955 8.72698C43.4315 8.72698 43.7195 8.66298 43.9595 8.53498C44.1995 8.39898 44.3915 8.21098 44.5355 7.97098C44.6875 7.73098 44.7995 7.44298 44.8715 7.10698C44.9435 6.76298 44.9795 6.37898 44.9795 5.95498V4.58698C44.9795 4.17098 44.9435 3.79098 44.8715 3.44698C44.7995 3.10298 44.6875 2.81098 44.5355 2.57098C44.3915 2.33098 44.1995 2.14698 43.9595 2.01898C43.7195 1.88298 43.4315 1.81498 43.0955 1.81498C42.7595 1.81498 42.4715 1.88298 42.2315 2.01898C41.9915 2.14698 41.7955 2.33098 41.6435 2.57098C41.4995 2.81098 41.3915 3.10298 41.3195 3.44698C41.2475 3.79098 41.2115 4.17098 41.2115 4.58698V5.95498C41.2115 6.37898 41.2475 6.76298 41.3195 7.10698C41.3915 7.44298 41.4995 7.73098 41.6435 7.97098C41.7955 8.21098 41.9915 8.39898 42.2315 8.53498C42.4715 8.66298 42.7595 8.72698 43.0955 8.72698ZM43.0955 5.97898C42.8155 5.97898 42.6195 5.92298 42.5075 5.81098C42.4035 5.69898 42.3515 5.56298 42.3515 5.40298V5.13898C42.3515 4.97898 42.4035 4.84298 42.5075 4.73098C42.6195 4.61898 42.8155 4.56298 43.0955 4.56298C43.3755 4.56298 43.5675 4.61898 43.6715 4.73098C43.7835 4.84298 43.8395 4.97898 43.8395 5.13898V5.40298C43.8395 5.56298 43.7835 5.69898 43.6715 5.81098C43.5675 5.92298 43.3755 5.97898 43.0955 5.97898ZM48.7188 5.18698C48.1908 5.18698 47.7588 5.01098 47.4228 4.65898C47.0948 4.29898 46.9308 3.76698 46.9308 3.06298C46.9308 2.35898 47.0948 1.83098 47.4228 1.47898C47.7588 1.11898 48.1908 0.938984 48.7188 0.938984C49.2468 0.938984 49.6748 1.11898 50.0028 1.47898C50.3388 1.83098 50.5068 2.35898 50.5068 3.06298C50.5068 3.76698 50.3388 4.29898 50.0028 4.65898C49.6748 5.01098 49.2468 5.18698 48.7188 5.18698ZM48.7188 4.53898C49.0068 4.53898 49.2388 4.43898 49.4148 4.23898C49.5988 4.03898 49.6908 3.74698 49.6908 3.36298V2.76298C49.6908 2.37898 49.5988 2.08698 49.4148 1.88698C49.2388 1.68698 49.0068 1.58698 48.7188 1.58698C48.4308 1.58698 48.1948 1.68698 48.0108 1.88698C47.8348 2.08698 47.7468 2.37898 47.7468 2.76298V3.36298C47.7468 3.74698 47.8348 4.03898 48.0108 4.23898C48.1948 4.43898 48.4308 4.53898 48.7188 4.53898ZM52.8108 1.08298H53.6748L51.7548 4.68298H50.8908L52.8108 1.08298ZM48.8268 5.85898H49.6908L47.7708 9.45898H46.9068L48.8268 5.85898ZM51.8628 9.60298C51.3348 9.60298 50.9028 9.42698 50.5668 9.07498C50.2388 8.71498 50.0748 8.18298 50.0748 7.47898C50.0748 6.77498 50.2388 6.24698 50.5668 5.89498C50.9028 5.53498 51.3348 5.35498 51.8628 5.35498C52.3908 5.35498 52.8188 5.53498 53.1468 5.89498C53.4828 6.24698 53.6508 6.77498 53.6508 7.47898C53.6508 8.18298 53.4828 8.71498 53.1468 9.07498C52.8188 9.42698 52.3908 9.60298 51.8628 9.60298ZM51.8628 8.95498C52.1508 8.95498 52.3828 8.85498 52.5588 8.65498C52.7428 8.45498 52.8348 8.16298 52.8348 7.77898V7.17898C52.8348 6.79498 52.7428 6.50298 52.5588 6.30298C52.3828 6.10298 52.1508 6.00298 51.8628 6.00298C51.5748 6.00298 51.3388 6.10298 51.1548 6.30298C50.9788 6.50298 50.8908 6.79498 50.8908 7.17898V7.77898C50.8908 8.16298 50.9788 8.45498 51.1548 8.65498C51.3388 8.85498 51.5748 8.95498 51.8628 8.95498ZM3.82128 29.459C3.34928 29.459 3.00128 29.327 2.77728 29.063C2.56128 28.799 2.45328 28.459 2.45328 28.043V24.083H0.38928V23.267H1.92528C2.13328 23.267 2.27728 23.227 2.35728 23.147C2.44528 23.059 2.48928 22.911 2.48928 22.703V21.083H3.41328V23.267H6.23328V24.083H3.41328V28.643H6.23328V29.459H3.82128ZM10.7166 29.603C10.2846 29.603 9.89259 29.527 9.54059 29.375C9.19659 29.223 8.90059 29.007 8.65259 28.727C8.41259 28.439 8.22859 28.099 8.10059 27.707C7.97259 27.307 7.90859 26.859 7.90859 26.363C7.90859 25.875 7.97259 25.431 8.10059 25.031C8.22859 24.631 8.41259 24.291 8.65259 24.011C8.90059 23.723 9.19659 23.503 9.54059 23.351C9.89259 23.199 10.2846 23.123 10.7166 23.123C11.1486 23.123 11.5366 23.199 11.8806 23.351C12.2326 23.503 12.5286 23.723 12.7686 24.011C13.0166 24.291 13.2046 24.631 13.3326 25.031C13.4606 25.431 13.5246 25.875 13.5246 26.363C13.5246 26.859 13.4606 27.307 13.3326 27.707C13.2046 28.099 13.0166 28.439 12.7686 28.727C12.5286 29.007 12.2326 29.223 11.8806 29.375C11.5366 29.527 11.1486 29.603 10.7166 29.603ZM10.7166 28.775C11.2526 28.775 11.6846 28.615 12.0126 28.295C12.3406 27.975 12.5046 27.479 12.5046 26.807V25.919C12.5046 25.247 12.3406 24.751 12.0126 24.431C11.6846 24.111 11.2526 23.951 10.7166 23.951C10.1806 23.951 9.74859 24.111 9.42059 24.431C9.09259 24.751 8.92859 25.247 8.92859 25.919V26.807C8.92859 27.479 9.09259 27.975 9.42059 28.295C9.74859 28.615 10.1806 28.775 10.7166 28.775ZM25.1072 29.603C24.6752 29.603 24.2832 29.527 23.9312 29.375C23.5872 29.223 23.2912 29.007 23.0432 28.727C22.8032 28.439 22.6192 28.099 22.4912 27.707C22.3632 27.307 22.2992 26.859 22.2992 26.363C22.2992 25.875 22.3632 25.431 22.4912 25.031C22.6192 24.631 22.8032 24.291 23.0432 24.011C23.2912 23.723 23.5872 23.503 23.9312 23.351C24.2832 23.199 24.6752 23.123 25.1072 23.123C25.5392 23.123 25.9272 23.199 26.2712 23.351C26.6232 23.503 26.9192 23.723 27.1592 24.011C27.4072 24.291 27.5952 24.631 27.7232 25.031C27.8512 25.431 27.9152 25.875 27.9152 26.363C27.9152 26.859 27.8512 27.307 27.7232 27.707C27.5952 28.099 27.4072 28.439 27.1592 28.727C26.9192 29.007 26.6232 29.223 26.2712 29.375C25.9272 29.527 25.5392 29.603 25.1072 29.603ZM25.1072 28.775C25.6432 28.775 26.0752 28.615 26.4032 28.295C26.7312 27.975 26.8952 27.479 26.8952 26.807V25.919C26.8952 25.247 26.7312 24.751 26.4032 24.431C26.0752 24.111 25.6432 23.951 25.1072 23.951C24.5712 23.951 24.1392 24.111 23.8112 24.431C23.4832 24.751 23.3192 25.247 23.3192 25.919V26.807C23.3192 27.479 23.4832 27.975 23.8112 28.295C24.1392 28.615 24.5712 28.775 25.1072 28.775ZM29.6265 28.643H31.4385V24.083H29.6265V23.267H32.3985V24.827H32.4585C32.5865 24.339 32.8265 23.959 33.1785 23.687C33.5385 23.407 33.9945 23.267 34.5465 23.267H35.4105V24.227H34.2465C33.6945 24.227 33.2465 24.387 32.9025 24.707C32.5665 25.027 32.3985 25.447 32.3985 25.967V28.643H34.7985V29.459H29.6265V28.643ZM39.8818 21.899C39.6018 21.899 39.4058 21.843 39.2938 21.731C39.1818 21.611 39.1258 21.463 39.1258 21.287V21.095C39.1258 20.919 39.1818 20.775 39.2938 20.663C39.4058 20.543 39.6018 20.483 39.8818 20.483C40.1618 20.483 40.3578 20.543 40.4698 20.663C40.5818 20.775 40.6378 20.919 40.6378 21.095V21.287C40.6378 21.463 40.5818 21.611 40.4698 21.731C40.3578 21.843 40.1618 21.899 39.8818 21.899ZM37.1698 28.643H39.4018V24.083H37.1698V23.267H40.3618V28.643H42.4498V29.459H37.1698V28.643ZM49.8252 30.167C49.8252 30.791 49.5652 31.251 49.0452 31.547C48.5252 31.851 47.7452 32.003 46.7052 32.003C45.7052 32.003 44.9852 31.871 44.5452 31.607C44.1132 31.343 43.8972 30.963 43.8972 30.467C43.8972 30.131 43.9852 29.871 44.1612 29.687C44.3372 29.503 44.5852 29.367 44.9052 29.279V29.135C44.7292 29.047 44.5932 28.935 44.4972 28.799C44.4012 28.663 44.3532 28.491 44.3532 28.283C44.3532 27.963 44.4572 27.723 44.6652 27.563C44.8812 27.403 45.1492 27.283 45.4692 27.203V27.155C45.0852 26.987 44.7852 26.739 44.5692 26.411C44.3612 26.083 44.2572 25.699 44.2572 25.259C44.2572 24.947 44.3132 24.659 44.4252 24.395C44.5372 24.131 44.6972 23.907 44.9052 23.723C45.1212 23.531 45.3772 23.383 45.6732 23.279C45.9692 23.175 46.2972 23.123 46.6572 23.123C47.1212 23.123 47.5292 23.207 47.8812 23.375V23.267C47.8812 23.027 47.9372 22.827 48.0492 22.667C48.1612 22.507 48.3532 22.427 48.6252 22.427H49.7652V23.267H48.3732V23.687C48.5972 23.879 48.7692 24.107 48.8892 24.371C49.0092 24.635 49.0692 24.931 49.0692 25.259C49.0692 25.571 49.0092 25.859 48.8892 26.123C48.7772 26.387 48.6172 26.615 48.4092 26.807C48.2012 26.991 47.9452 27.135 47.6412 27.239C47.3452 27.343 47.0172 27.395 46.6572 27.395C46.5532 27.395 46.4532 27.391 46.3572 27.383C46.2612 27.375 46.1652 27.363 46.0692 27.347C45.9732 27.363 45.8732 27.391 45.7692 27.431C45.6652 27.463 45.5692 27.511 45.4812 27.575C45.3932 27.631 45.3212 27.699 45.2652 27.779C45.2092 27.859 45.1812 27.951 45.1812 28.055C45.1812 28.239 45.2732 28.363 45.4572 28.427C45.6412 28.483 45.8812 28.511 46.1772 28.511H47.5452C48.3452 28.511 48.9252 28.663 49.2852 28.967C49.6452 29.263 49.8252 29.663 49.8252 30.167ZM48.9252 30.215C48.9252 29.967 48.8252 29.767 48.6252 29.615C48.4252 29.471 48.0772 29.399 47.5812 29.399H45.4332C45.0172 29.567 44.8092 29.847 44.8092 30.239C44.8092 30.511 44.9172 30.743 45.1332 30.935C45.3492 31.135 45.7092 31.235 46.2132 31.235H47.1492C47.7092 31.235 48.1452 31.147 48.4572 30.971C48.7692 30.803 48.9252 30.551 48.9252 30.215ZM46.6572 26.651C47.1372 26.651 47.4892 26.539 47.7132 26.315C47.9452 26.091 48.0612 25.795 48.0612 25.427V25.079C48.0612 24.711 47.9452 24.419 47.7132 24.203C47.4892 23.979 47.1372 23.867 46.6572 23.867C46.1772 23.867 45.8252 23.979 45.6012 24.203C45.3772 24.419 45.2652 24.711 45.2652 25.079V25.427C45.2652 25.795 45.3772 26.091 45.6012 26.315C45.8252 26.539 46.1772 26.651 46.6572 26.651ZM54.2725 21.899C53.9925 21.899 53.7965 21.843 53.6845 21.731C53.5725 21.611 53.5165 21.463 53.5165 21.287V21.095C53.5165 20.919 53.5725 20.775 53.6845 20.663C53.7965 20.543 53.9925 20.483 54.2725 20.483C54.5525 20.483 54.7485 20.543 54.8605 20.663C54.9725 20.775 55.0285 20.919 55.0285 21.095V21.287C55.0285 21.463 54.9725 21.611 54.8605 21.731C54.7485 21.843 54.5525 21.899 54.2725 21.899ZM51.5605 28.643H53.7925V24.083H51.5605V23.267H54.7525V28.643H56.8405V29.459H51.5605V28.643ZM58.6598 29.459V23.267H59.6198V24.275H59.6678C59.7318 24.123 59.8118 23.979 59.9078 23.843C60.0038 23.699 60.1198 23.575 60.2558 23.471C60.3998 23.367 60.5678 23.283 60.7598 23.219C60.9518 23.155 61.1758 23.123 61.4318 23.123C62.0798 23.123 62.5998 23.331 62.9918 23.747C63.3838 24.155 63.5798 24.735 63.5798 25.487V29.459H62.6198V25.655C62.6198 25.087 62.4958 24.667 62.2478 24.395C61.9998 24.115 61.6358 23.975 61.1558 23.975C60.9638 23.975 60.7758 23.999 60.5918 24.047C60.4078 24.095 60.2438 24.167 60.0998 24.263C59.9558 24.359 59.8398 24.483 59.7518 24.635C59.6638 24.787 59.6198 24.963 59.6198 25.163V29.459H58.6598ZM70.6191 29.459C70.2431 29.459 69.9751 29.363 69.8151 29.171C69.6551 28.979 69.5551 28.739 69.5151 28.451H69.4551C69.3191 28.811 69.0991 29.095 68.7951 29.303C68.4991 29.503 68.0991 29.603 67.5951 29.603C66.9471 29.603 66.4311 29.435 66.0471 29.099C65.6631 28.763 65.4711 28.303 65.4711 27.719C65.4711 27.143 65.6791 26.699 66.0951 26.387C66.5191 26.075 67.1991 25.919 68.1351 25.919H69.4551V25.307C69.4551 24.851 69.3271 24.511 69.0711 24.287C68.8151 24.055 68.4511 23.939 67.9791 23.939C67.5631 23.939 67.2231 24.023 66.9591 24.191C66.6951 24.351 66.4831 24.571 66.3231 24.851L65.6751 24.371C65.7551 24.211 65.8631 24.055 65.9991 23.903C66.1351 23.751 66.3031 23.619 66.5031 23.507C66.7031 23.387 66.9311 23.295 67.1871 23.231C67.4431 23.159 67.7271 23.123 68.0391 23.123C68.7671 23.123 69.3431 23.307 69.7671 23.675C70.1991 24.043 70.4151 24.555 70.4151 25.211V28.619H71.2791V29.459H70.6191ZM67.7631 28.799C68.0111 28.799 68.2351 28.771 68.4351 28.715C68.6431 28.651 68.8231 28.571 68.9751 28.475C69.1271 28.371 69.2431 28.251 69.3231 28.115C69.4111 27.971 69.4551 27.819 69.4551 27.659V26.639H68.1351C67.5591 26.639 67.1391 26.719 66.8751 26.879C66.6111 27.039 66.4791 27.271 66.4791 27.575V27.827C66.4791 28.147 66.5911 28.391 66.8151 28.559C67.0471 28.719 67.3631 28.799 67.7631 28.799ZM72.8344 28.643H74.9944V21.395H72.8344V20.579H75.9544V28.643H78.1144V29.459H72.8344V28.643ZM23.8496 49.459C23.4736 49.459 23.2056 49.363 23.0456 49.171C22.8856 48.979 22.7856 48.739 22.7456 48.451H22.6856C22.5496 48.811 22.3296 49.095 22.0256 49.303C21.7296 49.503 21.3296 49.603 20.8256 49.603C20.1776 49.603 19.6616 49.435 19.2776 49.099C18.8936 48.763 18.7016 48.303 18.7016 47.719C18.7016 47.143 18.9096 46.699 19.3256 46.387C19.7496 46.075 20.4296 45.919 21.3656 45.919H22.6856V45.307C22.6856 44.851 22.5576 44.511 22.3016 44.287C22.0456 44.055 21.6816 43.939 21.2096 43.939C20.7936 43.939 20.4536 44.023 20.1896 44.191C19.9256 44.351 19.7136 44.571 19.5536 44.851L18.9056 44.371C18.9856 44.211 19.0936 44.055 19.2296 43.903C19.3656 43.751 19.5336 43.619 19.7336 43.507C19.9336 43.387 20.1616 43.295 20.4176 43.231C20.6736 43.159 20.9576 43.123 21.2696 43.123C21.9976 43.123 22.5736 43.307 22.9976 43.675C23.4296 44.043 23.6456 44.555 23.6456 45.211V48.619H24.5096V49.459H23.8496ZM20.9936 48.799C21.2416 48.799 21.4656 48.771 21.6656 48.715C21.8736 48.651 22.0536 48.571 22.2056 48.475C22.3576 48.371 22.4736 48.251 22.5536 48.115C22.6416 47.971 22.6856 47.819 22.6856 47.659V46.639H21.3656C20.7896 46.639 20.3696 46.719 20.1056 46.879C19.8416 47.039 19.7096 47.271 19.7096 47.575V47.827C19.7096 48.147 19.8216 48.391 20.0456 48.559C20.2776 48.719 20.5936 48.799 20.9936 48.799ZM26.0289 48.643H27.8409V44.083H26.0289V43.267H28.8009V44.827H28.8609C28.9889 44.339 29.2289 43.959 29.5809 43.687C29.9409 43.407 30.3969 43.267 30.9489 43.267H31.8129V44.227H30.6489C30.0969 44.227 29.6489 44.387 29.3049 44.707C28.9689 45.027 28.8009 45.447 28.8009 45.967V48.643H31.2009V49.459H26.0289V48.643ZM36.2002 49.459C35.7282 49.459 35.3802 49.327 35.1562 49.063C34.9402 48.799 34.8322 48.459 34.8322 48.043V44.083H32.7682V43.267H34.3042C34.5122 43.267 34.6562 43.227 34.7362 43.147C34.8242 43.059 34.8682 42.911 34.8682 42.703V41.083H35.7922V43.267H38.6122V44.083H35.7922V48.643H38.6122V49.459H36.2002ZM43.4795 41.899C43.1995 41.899 43.0035 41.843 42.8915 41.731C42.7795 41.611 42.7235 41.463 42.7235 41.287V41.095C42.7235 40.919 42.7795 40.775 42.8915 40.663C43.0035 40.543 43.1995 40.483 43.4795 40.483C43.7595 40.483 43.9555 40.543 44.0675 40.663C44.1795 40.775 44.2355 40.919 44.2355 41.095V41.287C44.2355 41.463 44.1795 41.611 44.0675 41.731C43.9555 41.843 43.7595 41.899 43.4795 41.899ZM40.7675 48.643H42.9995V44.083H40.7675V43.267H43.9595V48.643H46.0475V49.459H40.7675V48.643ZM50.3628 49.603C49.7148 49.603 49.1548 49.495 48.6828 49.279C48.2188 49.055 47.8228 48.759 47.4948 48.391L48.1428 47.827C48.4388 48.139 48.7628 48.379 49.1148 48.547C49.4668 48.715 49.8908 48.799 50.3868 48.799C50.8668 48.799 51.2588 48.715 51.5628 48.547C51.8748 48.371 52.0308 48.099 52.0308 47.731C52.0308 47.571 51.9988 47.439 51.9348 47.335C51.8788 47.223 51.7988 47.135 51.6948 47.071C51.5908 47.007 51.4748 46.959 51.3468 46.927C51.2188 46.887 51.0828 46.855 50.9388 46.831L49.9668 46.687C49.7508 46.655 49.5148 46.611 49.2588 46.555C49.0108 46.499 48.7828 46.411 48.5748 46.291C48.3668 46.163 48.1908 45.995 48.0468 45.787C47.9108 45.579 47.8428 45.307 47.8428 44.971C47.8428 44.659 47.9028 44.391 48.0228 44.167C48.1508 43.935 48.3268 43.743 48.5508 43.591C48.7748 43.431 49.0388 43.315 49.3428 43.243C49.6468 43.163 49.9788 43.123 50.3388 43.123C50.8988 43.123 51.3828 43.211 51.7908 43.387C52.2068 43.563 52.5628 43.807 52.8588 44.119L52.2348 44.707C52.1628 44.619 52.0708 44.531 51.9588 44.443C51.8548 44.347 51.7228 44.263 51.5628 44.191C51.4108 44.111 51.2308 44.047 51.0228 43.999C50.8148 43.951 50.5748 43.927 50.3028 43.927C49.8148 43.927 49.4388 44.011 49.1748 44.179C48.9188 44.347 48.7908 44.591 48.7908 44.911C48.7908 45.071 48.8188 45.207 48.8748 45.319C48.9388 45.423 49.0228 45.507 49.1268 45.571C49.2308 45.635 49.3468 45.687 49.4748 45.727C49.6108 45.759 49.7468 45.787 49.8828 45.811L50.8548 45.955C51.0788 45.987 51.3148 46.031 51.5628 46.087C51.8108 46.143 52.0388 46.235 52.2468 46.363C52.4548 46.483 52.6268 46.647 52.7628 46.855C52.9068 47.063 52.9788 47.335 52.9788 47.671C52.9788 48.287 52.7388 48.763 52.2588 49.099C51.7868 49.435 51.1548 49.603 50.3628 49.603ZM57.7861 49.459C57.3141 49.459 56.9661 49.327 56.7421 49.063C56.5261 48.799 56.4181 48.459 56.4181 48.043V44.083H54.3541V43.267H55.8901C56.0981 43.267 56.2421 43.227 56.3221 43.147C56.4101 43.059 56.4541 42.911 56.4541 42.703V41.083H57.3781V43.267H60.1981V44.083H57.3781V48.643H60.1981V49.459H57.7861Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                          <div class="col-lg-4 col-12">
                            <p class="add-content-title text-center">
                              UNRELEASED MUSIC
                            </p>
                            <span class="svg-wrapper">
                              <svg
                                fill="none"
                                height="217"
                                style="position: relative;"
                                viewBox="0 0 217 217"
                                width="217"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M108.505 108.505V0C168.429 0 217.01 48.5811 217.01 108.505C217.01 168.429 168.429 217.01 108.505 217.01C48.5811 217.01 0 168.419 0 108.505C0 48.5907 48.5811 0 108.505 0V108.505Z"
                                  fill="#442671"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="139"
                                viewBox="0 0 139 139"
                                width="139"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M69.4857 138.877C107.709 138.877 138.695 107.891 138.695 69.6682C138.695 31.4449 107.709 0.458862 69.4857 0.458862C31.2624 0.458862 0.276367 31.4449 0.276367 69.6682C0.276367 107.891 31.2624 138.877 69.4857 138.877Z"
                                  fill="#F2F1EF"
                                />
                              </svg>
                              <svg
                                class="both-centered"
                                fill="none"
                                height="50"
                                viewBox="0 0 57 50"
                                width="57"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M15.1346 9.5V8.624H17.5346V1.868H17.4506L15.3386 3.836L14.7506 3.2L16.9706 1.124H18.5426V8.624H20.7506V9.5H15.1346ZM24.91 9.644C24.398 9.644 23.958 9.548 23.59 9.356C23.222 9.156 22.918 8.872 22.678 8.504C22.438 8.136 22.262 7.684 22.15 7.148C22.038 6.612 21.982 6 21.982 5.312C21.982 4.632 22.038 4.024 22.15 3.488C22.262 2.944 22.438 2.488 22.678 2.12C22.918 1.752 23.222 1.472 23.59 1.28C23.958 1.08 24.398 0.98 24.91 0.98C25.422 0.98 25.862 1.08 26.23 1.28C26.598 1.472 26.902 1.752 27.142 2.12C27.382 2.488 27.558 2.944 27.67 3.488C27.782 4.024 27.838 4.632 27.838 5.312C27.838 6 27.782 6.612 27.67 7.148C27.558 7.684 27.382 8.136 27.142 8.504C26.902 8.872 26.598 9.156 26.23 9.356C25.862 9.548 25.422 9.644 24.91 9.644ZM24.91 8.768C25.246 8.768 25.534 8.704 25.774 8.576C26.014 8.44 26.206 8.252 26.35 8.012C26.502 7.772 26.614 7.484 26.686 7.148C26.758 6.804 26.794 6.42 26.794 5.996V4.628C26.794 4.212 26.758 3.832 26.686 3.488C26.614 3.144 26.502 2.852 26.35 2.612C26.206 2.372 26.014 2.188 25.774 2.06C25.534 1.924 25.246 1.856 24.91 1.856C24.574 1.856 24.286 1.924 24.046 2.06C23.806 2.188 23.61 2.372 23.458 2.612C23.314 2.852 23.206 3.144 23.134 3.488C23.062 3.832 23.026 4.212 23.026 4.628V5.996C23.026 6.42 23.062 6.804 23.134 7.148C23.206 7.484 23.314 7.772 23.458 8.012C23.61 8.252 23.806 8.44 24.046 8.576C24.286 8.704 24.574 8.768 24.91 8.768ZM24.91 6.02C24.63 6.02 24.434 5.964 24.322 5.852C24.218 5.74 24.166 5.604 24.166 5.444V5.18C24.166 5.02 24.218 4.884 24.322 4.772C24.434 4.66 24.63 4.604 24.91 4.604C25.19 4.604 25.382 4.66 25.486 4.772C25.598 4.884 25.654 5.02 25.654 5.18V5.444C25.654 5.604 25.598 5.74 25.486 5.852C25.382 5.964 25.19 6.02 24.91 6.02ZM32.1053 9.644C31.5933 9.644 31.1533 9.548 30.7853 9.356C30.4173 9.156 30.1133 8.872 29.8733 8.504C29.6333 8.136 29.4573 7.684 29.3453 7.148C29.2333 6.612 29.1773 6 29.1773 5.312C29.1773 4.632 29.2333 4.024 29.3453 3.488C29.4573 2.944 29.6333 2.488 29.8733 2.12C30.1133 1.752 30.4173 1.472 30.7853 1.28C31.1533 1.08 31.5933 0.98 32.1053 0.98C32.6173 0.98 33.0573 1.08 33.4253 1.28C33.7933 1.472 34.0973 1.752 34.3373 2.12C34.5773 2.488 34.7533 2.944 34.8653 3.488C34.9773 4.024 35.0333 4.632 35.0333 5.312C35.0333 6 34.9773 6.612 34.8653 7.148C34.7533 7.684 34.5773 8.136 34.3373 8.504C34.0973 8.872 33.7933 9.156 33.4253 9.356C33.0573 9.548 32.6173 9.644 32.1053 9.644ZM32.1053 8.768C32.4413 8.768 32.7293 8.704 32.9693 8.576C33.2093 8.44 33.4013 8.252 33.5453 8.012C33.6973 7.772 33.8093 7.484 33.8813 7.148C33.9533 6.804 33.9893 6.42 33.9893 5.996V4.628C33.9893 4.212 33.9533 3.832 33.8813 3.488C33.8093 3.144 33.6973 2.852 33.5453 2.612C33.4013 2.372 33.2093 2.188 32.9693 2.06C32.7293 1.924 32.4413 1.856 32.1053 1.856C31.7693 1.856 31.4813 1.924 31.2413 2.06C31.0013 2.188 30.8053 2.372 30.6533 2.612C30.5093 2.852 30.4013 3.144 30.3293 3.488C30.2573 3.832 30.2213 4.212 30.2213 4.628V5.996C30.2213 6.42 30.2573 6.804 30.3293 7.148C30.4013 7.484 30.5093 7.772 30.6533 8.012C30.8053 8.252 31.0013 8.44 31.2413 8.576C31.4813 8.704 31.7693 8.768 32.1053 8.768ZM32.1053 6.02C31.8253 6.02 31.6293 5.964 31.5173 5.852C31.4133 5.74 31.3613 5.604 31.3613 5.444V5.18C31.3613 5.02 31.4133 4.884 31.5173 4.772C31.6293 4.66 31.8253 4.604 32.1053 4.604C32.3853 4.604 32.5773 4.66 32.6813 4.772C32.7933 4.884 32.8493 5.02 32.8493 5.18V5.444C32.8493 5.604 32.7933 5.74 32.6813 5.852C32.5773 5.964 32.3853 6.02 32.1053 6.02ZM37.7286 5.228C37.2006 5.228 36.7686 5.052 36.4326 4.7C36.1046 4.34 35.9406 3.808 35.9406 3.104C35.9406 2.4 36.1046 1.872 36.4326 1.52C36.7686 1.16 37.2006 0.98 37.7286 0.98C38.2566 0.98 38.6846 1.16 39.0126 1.52C39.3486 1.872 39.5166 2.4 39.5166 3.104C39.5166 3.808 39.3486 4.34 39.0126 4.7C38.6846 5.052 38.2566 5.228 37.7286 5.228ZM37.7286 4.58C38.0166 4.58 38.2486 4.48 38.4246 4.28C38.6086 4.08 38.7006 3.788 38.7006 3.404V2.804C38.7006 2.42 38.6086 2.128 38.4246 1.928C38.2486 1.728 38.0166 1.628 37.7286 1.628C37.4406 1.628 37.2046 1.728 37.0206 1.928C36.8446 2.128 36.7566 2.42 36.7566 2.804V3.404C36.7566 3.788 36.8446 4.08 37.0206 4.28C37.2046 4.48 37.4406 4.58 37.7286 4.58ZM41.8206 1.124H42.6846L40.7646 4.724H39.9006L41.8206 1.124ZM37.8366 5.9H38.7006L36.7806 9.5H35.9166L37.8366 5.9ZM40.8726 9.644C40.3446 9.644 39.9126 9.468 39.5766 9.116C39.2486 8.756 39.0846 8.224 39.0846 7.52C39.0846 6.816 39.2486 6.288 39.5766 5.936C39.9126 5.576 40.3446 5.396 40.8726 5.396C41.4006 5.396 41.8286 5.576 42.1566 5.936C42.4926 6.288 42.6606 6.816 42.6606 7.52C42.6606 8.224 42.4926 8.756 42.1566 9.116C41.8286 9.468 41.4006 9.644 40.8726 9.644ZM40.8726 8.996C41.1606 8.996 41.3926 8.896 41.5686 8.696C41.7526 8.496 41.8446 8.204 41.8446 7.82V7.22C41.8446 6.836 41.7526 6.544 41.5686 6.344C41.3926 6.144 41.1606 6.044 40.8726 6.044C40.5846 6.044 40.3486 6.144 40.1646 6.344C39.9886 6.544 39.9006 6.836 39.9006 7.22V7.82C39.9006 8.204 39.9886 8.496 40.1646 8.696C40.3486 8.896 40.5846 8.996 40.8726 8.996ZM10.8193 29.5C10.3473 29.5 9.99933 29.368 9.77533 29.104C9.55933 28.84 9.45133 28.5 9.45133 28.084V24.124H7.38733V23.308H8.92333C9.13133 23.308 9.27533 23.268 9.35533 23.188C9.44333 23.1 9.48733 22.952 9.48733 22.744V21.124H10.4113V23.308H13.2313V24.124H10.4113V28.684H13.2313V29.5H10.8193ZM17.7146 29.644C17.2826 29.644 16.8906 29.568 16.5386 29.416C16.1946 29.264 15.8986 29.048 15.6506 28.768C15.4106 28.48 15.2266 28.14 15.0986 27.748C14.9706 27.348 14.9066 26.9 14.9066 26.404C14.9066 25.916 14.9706 25.472 15.0986 25.072C15.2266 24.672 15.4106 24.332 15.6506 24.052C15.8986 23.764 16.1946 23.544 16.5386 23.392C16.8906 23.24 17.2826 23.164 17.7146 23.164C18.1466 23.164 18.5346 23.24 18.8786 23.392C19.2306 23.544 19.5266 23.764 19.7666 24.052C20.0146 24.332 20.2026 24.672 20.3306 25.072C20.4586 25.472 20.5226 25.916 20.5226 26.404C20.5226 26.9 20.4586 27.348 20.3306 27.748C20.2026 28.14 20.0146 28.48 19.7666 28.768C19.5266 29.048 19.2306 29.264 18.8786 29.416C18.5346 29.568 18.1466 29.644 17.7146 29.644ZM17.7146 28.816C18.2506 28.816 18.6826 28.656 19.0106 28.336C19.3386 28.016 19.5026 27.52 19.5026 26.848V25.96C19.5026 25.288 19.3386 24.792 19.0106 24.472C18.6826 24.152 18.2506 23.992 17.7146 23.992C17.1786 23.992 16.7466 24.152 16.4186 24.472C16.0906 24.792 15.9266 25.288 15.9266 25.96V26.848C15.9266 27.52 16.0906 28.016 16.4186 28.336C16.7466 28.656 17.1786 28.816 17.7146 28.816ZM32.4053 29.5C31.9333 29.5 31.5853 29.368 31.3613 29.104C31.1453 28.84 31.0373 28.5 31.0373 28.084V24.124H28.9733V23.308H30.5093C30.7173 23.308 30.8613 23.268 30.9413 23.188C31.0293 23.1 31.0733 22.952 31.0733 22.744V21.124H31.9973V23.308H34.8173V24.124H31.9973V28.684H34.8173V29.5H32.4053ZM36.8766 20.62H37.8366V24.316H37.8846C37.9486 24.164 38.0286 24.02 38.1246 23.884C38.2206 23.74 38.3366 23.616 38.4726 23.512C38.6166 23.408 38.7846 23.324 38.9766 23.26C39.1686 23.196 39.3926 23.164 39.6486 23.164C40.2966 23.164 40.8166 23.372 41.2086 23.788C41.6006 24.196 41.7966 24.776 41.7966 25.528V29.5H40.8366V25.696C40.8366 25.128 40.7126 24.708 40.4646 24.436C40.2166 24.156 39.8526 24.016 39.3726 24.016C39.1806 24.016 38.9926 24.04 38.8086 24.088C38.6246 24.136 38.4606 24.208 38.3166 24.304C38.1726 24.4 38.0566 24.524 37.9686 24.676C37.8806 24.828 37.8366 25.004 37.8366 25.204V29.5H36.8766V20.62ZM46.6039 29.644C46.1559 29.644 45.7519 29.568 45.3919 29.416C45.0399 29.264 44.7359 29.048 44.4799 28.768C44.2319 28.48 44.0399 28.14 43.9039 27.748C43.7679 27.348 43.6999 26.904 43.6999 26.416C43.6999 25.92 43.7679 25.472 43.9039 25.072C44.0479 24.672 44.2439 24.332 44.4919 24.052C44.7399 23.764 45.0359 23.544 45.3799 23.392C45.7319 23.24 46.1199 23.164 46.5439 23.164C46.9599 23.164 47.3359 23.24 47.6719 23.392C48.0159 23.544 48.3079 23.756 48.5479 24.028C48.7879 24.292 48.9719 24.608 49.0999 24.976C49.2279 25.344 49.2919 25.748 49.2919 26.188V26.644H44.7079V26.932C44.7079 27.204 44.7519 27.456 44.8399 27.688C44.9279 27.92 45.0519 28.12 45.2119 28.288C45.3799 28.456 45.5799 28.588 45.8119 28.684C46.0519 28.772 46.3159 28.816 46.6039 28.816C47.0199 28.816 47.3799 28.72 47.6839 28.528C47.9879 28.336 48.2199 28.072 48.3799 27.736L49.0879 28.216C48.9039 28.632 48.5959 28.976 48.1639 29.248C47.7399 29.512 47.2199 29.644 46.6039 29.644ZM46.5439 23.956C46.2799 23.956 46.0359 24.004 45.8119 24.1C45.5879 24.196 45.3919 24.328 45.2239 24.496C45.0639 24.664 44.9359 24.864 44.8399 25.096C44.7519 25.32 44.7079 25.568 44.7079 25.84V25.924H48.2599V25.792C48.2599 25.52 48.2159 25.272 48.1279 25.048C48.0479 24.824 47.9319 24.632 47.7799 24.472C47.6359 24.304 47.4559 24.176 47.2399 24.088C47.0319 24 46.7999 23.956 46.5439 23.956ZM0.804014 49.5V41.124H3.85201C4.62801 41.124 5.22001 41.336 5.62801 41.76C6.03601 42.184 6.24001 42.776 6.24001 43.536C6.24001 44.296 6.03601 44.888 5.62801 45.312C5.22001 45.736 4.62801 45.948 3.85201 45.948H1.81201V49.5H0.804014ZM1.81201 45.072H3.82801C4.25201 45.072 4.58001 44.968 4.81201 44.76C5.05201 44.544 5.17201 44.24 5.17201 43.848V43.224C5.17201 42.832 5.05201 42.532 4.81201 42.324C4.58001 42.108 4.25201 42 3.82801 42H1.81201V45.072ZM7.84333 48.684H9.65533V44.124H7.84333V43.308H10.6153V44.868H10.6753C10.8033 44.38 11.0433 44 11.3953 43.728C11.7553 43.448 12.2113 43.308 12.7633 43.308H13.6273V44.268H12.4633C11.9113 44.268 11.4633 44.428 11.1193 44.748C10.7833 45.068 10.6153 45.488 10.6153 46.008V48.684H13.0153V49.5H7.84333V48.684ZM17.7146 49.644C17.2826 49.644 16.8906 49.568 16.5386 49.416C16.1946 49.264 15.8986 49.048 15.6506 48.768C15.4106 48.48 15.2266 48.14 15.0986 47.748C14.9706 47.348 14.9066 46.9 14.9066 46.404C14.9066 45.916 14.9706 45.472 15.0986 45.072C15.2266 44.672 15.4106 44.332 15.6506 44.052C15.8986 43.764 16.1946 43.544 16.5386 43.392C16.8906 43.24 17.2826 43.164 17.7146 43.164C18.1466 43.164 18.5346 43.24 18.8786 43.392C19.2306 43.544 19.5266 43.764 19.7666 44.052C20.0146 44.332 20.2026 44.672 20.3306 45.072C20.4586 45.472 20.5226 45.916 20.5226 46.404C20.5226 46.9 20.4586 47.348 20.3306 47.748C20.2026 48.14 20.0146 48.48 19.7666 48.768C19.5266 49.048 19.2306 49.264 18.8786 49.416C18.5346 49.568 18.1466 49.644 17.7146 49.644ZM17.7146 48.816C18.2506 48.816 18.6826 48.656 19.0106 48.336C19.3386 48.016 19.5026 47.52 19.5026 46.848V45.96C19.5026 45.288 19.3386 44.792 19.0106 44.472C18.6826 44.152 18.2506 43.992 17.7146 43.992C17.1786 43.992 16.7466 44.152 16.4186 44.472C16.0906 44.792 15.9266 45.288 15.9266 45.96V46.848C15.9266 47.52 16.0906 48.016 16.4186 48.336C16.7466 48.656 17.1786 48.816 17.7146 48.816ZM26.41 48.492H26.362C25.962 49.26 25.326 49.644 24.454 49.644C23.694 49.644 23.098 49.36 22.666 48.792C22.242 48.224 22.03 47.428 22.03 46.404C22.03 45.38 22.242 44.584 22.666 44.016C23.098 43.448 23.694 43.164 24.454 43.164C25.326 43.164 25.962 43.548 26.362 44.316H26.41V40.62H27.37V49.5H26.41V48.492ZM24.826 48.792C25.042 48.792 25.246 48.764 25.438 48.708C25.63 48.652 25.798 48.572 25.942 48.468C26.086 48.356 26.198 48.224 26.278 48.072C26.366 47.912 26.41 47.728 26.41 47.52V45.288C26.41 45.08 26.366 44.9 26.278 44.748C26.198 44.588 26.086 44.456 25.942 44.352C25.798 44.24 25.63 44.156 25.438 44.1C25.246 44.044 25.042 44.016 24.826 44.016C24.266 44.016 23.83 44.188 23.518 44.532C23.214 44.868 23.062 45.316 23.062 45.876V46.932C23.062 47.492 23.214 47.944 23.518 48.288C23.83 48.624 24.266 48.792 24.826 48.792ZM33.5693 48.492H33.5213C33.4573 48.644 33.3773 48.792 33.2813 48.936C33.1853 49.072 33.0653 49.192 32.9213 49.296C32.7853 49.4 32.6213 49.484 32.4293 49.548C32.2373 49.612 32.0133 49.644 31.7573 49.644C31.1093 49.644 30.5893 49.44 30.1973 49.032C29.8053 48.616 29.6093 48.032 29.6093 47.28V43.308H30.5693V47.112C30.5693 47.68 30.6933 48.104 30.9413 48.384C31.1893 48.656 31.5533 48.792 32.0333 48.792C32.2253 48.792 32.4133 48.768 32.5973 48.72C32.7813 48.672 32.9453 48.6 33.0893 48.504C33.2333 48.408 33.3493 48.288 33.4373 48.144C33.5253 47.992 33.5693 47.812 33.5693 47.604V43.308H34.5293V49.5H33.5693V48.492ZM39.5166 49.644C39.0686 49.644 38.6686 49.568 38.3166 49.416C37.9726 49.256 37.6806 49.036 37.4406 48.756C37.2006 48.476 37.0166 48.136 36.8886 47.736C36.7686 47.336 36.7086 46.892 36.7086 46.404C36.7086 45.916 36.7726 45.472 36.9006 45.072C37.0286 44.672 37.2126 44.332 37.4526 44.052C37.6926 43.764 37.9846 43.544 38.3286 43.392C38.6726 43.24 39.0646 43.164 39.5046 43.164C40.1046 43.164 40.5926 43.296 40.9686 43.56C41.3446 43.824 41.6206 44.168 41.7966 44.592L41.0286 45C40.9166 44.68 40.7286 44.432 40.4646 44.256C40.2086 44.08 39.8886 43.992 39.5046 43.992C39.2246 43.992 38.9726 44.04 38.7486 44.136C38.5326 44.224 38.3486 44.352 38.1966 44.52C38.0446 44.688 37.9286 44.888 37.8486 45.12C37.7766 45.352 37.7406 45.604 37.7406 45.876V46.932C37.7406 47.204 37.7766 47.456 37.8486 47.688C37.9286 47.92 38.0446 48.12 38.1966 48.288C38.3486 48.456 38.5366 48.588 38.7606 48.684C38.9846 48.772 39.2406 48.816 39.5286 48.816C39.9446 48.816 40.2886 48.72 40.5606 48.528C40.8326 48.336 41.0486 48.072 41.2086 47.736L41.8926 48.204C41.7086 48.62 41.4206 48.964 41.0286 49.236C40.6446 49.508 40.1406 49.644 39.5166 49.644ZM46.6039 49.644C46.1559 49.644 45.7519 49.568 45.3919 49.416C45.0399 49.264 44.7359 49.048 44.4799 48.768C44.2319 48.48 44.0399 48.14 43.9039 47.748C43.7679 47.348 43.6999 46.904 43.6999 46.416C43.6999 45.92 43.7679 45.472 43.9039 45.072C44.0479 44.672 44.2439 44.332 44.4919 44.052C44.7399 43.764 45.0359 43.544 45.3799 43.392C45.7319 43.24 46.1199 43.164 46.5439 43.164C46.9599 43.164 47.3359 43.24 47.6719 43.392C48.0159 43.544 48.3079 43.756 48.5479 44.028C48.7879 44.292 48.9719 44.608 49.0999 44.976C49.2279 45.344 49.2919 45.748 49.2919 46.188V46.644H44.7079V46.932C44.7079 47.204 44.7519 47.456 44.8399 47.688C44.9279 47.92 45.0519 48.12 45.2119 48.288C45.3799 48.456 45.5799 48.588 45.8119 48.684C46.0519 48.772 46.3159 48.816 46.6039 48.816C47.0199 48.816 47.3799 48.72 47.6839 48.528C47.9879 48.336 48.2199 48.072 48.3799 47.736L49.0879 48.216C48.9039 48.632 48.5959 48.976 48.1639 49.248C47.7399 49.512 47.2199 49.644 46.6039 49.644ZM46.5439 43.956C46.2799 43.956 46.0359 44.004 45.8119 44.1C45.5879 44.196 45.3919 44.328 45.2239 44.496C45.0639 44.664 44.9359 44.864 44.8399 45.096C44.7519 45.32 44.7079 45.568 44.7079 45.84V45.924H48.2599V45.792C48.2599 45.52 48.2159 45.272 48.1279 45.048C48.0479 44.824 47.9319 44.632 47.7799 44.472C47.6359 44.304 47.4559 44.176 47.2399 44.088C47.0319 44 46.7999 43.956 46.5439 43.956ZM51.0152 48.684H52.8272V44.124H51.0152V43.308H53.7872V44.868H53.8472C53.9752 44.38 54.2152 44 54.5672 43.728C54.9272 43.448 55.3832 43.308 55.9352 43.308H56.7992V44.268H55.6352C55.0832 44.268 54.6352 44.428 54.2912 44.748C53.9552 45.068 53.7872 45.488 53.7872 46.008V48.684H56.1872V49.5H51.0152V48.684Z"
                                  fill="#75707B"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-3"
                :class="searchHash === 'producer-info-3' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-3-btn"
                  v-b-toggle="'producer-info-3'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-3')"
                >
                  <div class="faq-title">
                    What is an Aslice ID number? How do I add my ID number to my unreleased music?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-3')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      For music that is sold through retailers, standard metadata will facilitate our identification and matching process. However, Aslice also recognizes that DJs often play unreleased music, which is why we wanted to make sure that producers could get paid for those tracks too, regardless of whether or not the music has officially hit the street.
                      <br /><br />
                      After Aslice users sign up and complete registration, our platform generates a unique ID number that can be found next to the profile photo avatar in the online user dashboard. Music producers can easily embed this 9-digit number in their music metadata before sending DJs their unreleased tracks. The Aslice ID number also can be added to officially released music and/or music promos, adding an additional layer of identifying information to the artist’s tracks.
                      <br /><br />
                      If a DJ using Aslice uploads a playlist with a song that has an Aslice ID number embedded in the metadata, we can easily match it to the producer who created the track and get them paid.
                      <br /><br />
                      To ensure that your unreleased music is read properly by Aslice, please input your Aslice ID number somewhere in the “artist,” or “name” field of your track’s metadata.
                      <br /><br />
                      Example in the artist field: John Doe (123456789)
                      <br />
                      Example in the “name” field: Song Name (123456789)
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-5"
                :class="searchHash === 'producer-info-5' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-5-btn"
                  v-b-toggle="'producer-info-5'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-5')"
                >
                  <div class="faq-title">
                    Can I add an Aslice ID number to a WAV file? Why do you
                    suggest using AIFF or MP3 instead?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-5')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Yes, WAV files do support some metadata, but they are not
                      the best option for Aslice, as the metadata often becomes
                      incomplete or is lost altogether when these files are
                      copied, transferred or put into other programs.
                      <br /><br />
                      This is the main reason that we recommend AIFFs as a
                      superior alternative to WAVs. They have the same lossless
                      resolution, allow artwork and will also retain information
                      like Artist, Title, BPM and your Aslice ID number.
                      Remember, the more metadata we can find, the better the
                      chances of accurate matching. MP3s also work, as they
                      offer the same level of metadata as AIFFs, although their
                      reduced bit rate does affect sound quality.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-7"
                :class="searchHash === 'producer-info-7' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-7-btn"
                  v-b-toggle="'producer-info-7'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-7')"
                >
                  <div class="faq-title">
                    What happens to money that isn’t claimed by producers?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-7')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice attempts to reach out and track down every producer that has money being held in our system. Those that have earned over the $50 automatic payout threshold are prioritized by Aslice. Aslice is able to safely hold unregistered user money in a trust until it is claimed. However, if we can’t reach the producer after several years*, their money will be moved into our non-profit <router-link :to="{ name: 'The Aslice Foundation' }">Aslice Foundation</router-link>, where it will eventually be donated to charities voted on by Aslice users. If you are a music producer, make sure to register via our <router-link :to="{ name: 'Main' }">homepage</router-link>.
                    </span>
                    <br>
                    <br>
                    <span>
                      *Note: our accountant has indicated that we can safely hold money for producers in escrow for at least five years. We’re using this as our official duration, but may be able to extend longer.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-8"
                :class="searchHash === 'producer-info-8' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-8-btn"
                  v-b-toggle="'producer-info-8'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-8')"
                >
                  <div class="faq-title">
                    What happens if my music (or my money) is claimed by someone
                    else?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-8')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      This shouldn't be possible, as our verification process
                      matches the standards of international financial
                      institutions. Nevertheless, if you feel that someone else
                      has falsely registered in your name or is receiving
                      proceeds that rightly belong to you
                      <a href="/contact">please contact us immediately</a>,
                      select “identity and music rights” from the drop-down menu
                      and fill out all of the pertinent information. We will
                      quickly take the necessary steps to evaluate and validate
                      your claim.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="producer-info-button-15"
                  :class="searchHash === 'producer-info-15' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="producer-info-15-btn"
                    v-b-toggle="'producer-info-15'"
                    block
                    variant="info"
                    @click="scrollToSection('producer-info-15')"
                >
                  <div class="faq-title">
                    I just received a track play notification about a track that is not mine. How do I report this to the Aslice Admin Team?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('producer-info-15')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="producer-info-15"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      To report an incorrect track match or discrepancy about your track reports, log in to your online dashboard and click “NOT MY TRACK”. An admin team member will reach out to your email address on file to repair the issue.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="producer-info-button-9"
                  :class="searchHash === 'producer-info-9' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                  id="producer-info-9-btn"
                  v-b-toggle="'producer-info-9'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-9')"
                >
                  <div class="faq-title">
                    Why can’t I see how much a DJ has shared with me for each
                    track they play?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-9')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-9"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Payment amounts from DJs are hidden from producers to
                      protect DJs’ privacy and prevent any attempts to reverse
                      engineer their DJ fees or the total amount they’ve shared.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-10"
                :class="searchHash === 'producer-info-10' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-10-btn"
                  v-b-toggle="'producer-info-10'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-10')"
                >
                  <div class="faq-title">
                    Why do you ask for my performance rights organization and/or
                    publisher information?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-10')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-10"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Our primary purpose is to rebalance revenues between
                      performers (DJs) and creators (producers), but our
                      ambition is much greater. We are working to integrate with
                      PROs and publishers to get you even more earnings (beyond
                      Aslice) that are rightfully yours. To help us in that
                      effort, please make sure to keep your profile up to date
                      by listing your Performance Rights Organization and any
                      publishing company that you work with.
                      <br /><br />
                      <a href="/copyrightexplained" target="_blank"
                      >Learn more about PROs and Publishing here</a
                      >
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-11"
                :class="searchHash === 'producer-info-11' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-11-btn"
                  v-b-toggle="'producer-info-11'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-11')"
                >
                  <div class="faq-title">
                    Where can I find my tax documents as a producer?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-11')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-11"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice provides all necessary records and reports via the online producer dashboard under the “Accounting” tab. We also email end-of-year statements to users.
                      <br /><br />
                      All users are responsible for their own reporting and are advised to consult with tax authorities in their respective territories.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-12"
                :class="searchHash === 'producer-info-12' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-12-btn"
                  v-b-toggle="'producer-info-12'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-12')"
                >
                  <div class="faq-title">
                    I just attempted to register as a producer and have been notified that I have been put into a pending/hold status? What does this mean? When will my artist profile be verified?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-12')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-12"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Your DJ/producer account could have been moved into a temporary hold state because you either have not yet released music that can be matched in public databases or because you have limited social media links for us to verify your artist identity. We have built a system to keep profiles in a temporary unverified status until a track of yours gets played. Once a working DJ uploads a playlist containing one of your tracks, we will verify your profile and notify you.
                      <br><br>
                      As a new artist, we highly recommend that you register all your social media accounts under the unique performance name you want to release music as in the future and keep them up to date in your Aslice “Preferences” via the online user dashboard.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-13"
                :class="searchHash === 'producer-info-13' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-13-btn"
                  v-b-toggle="'producer-info-13'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-13')"
                >
                  <div class="faq-title">
                    I’m a Producer. How many track plays do I need before I get paid by Aslice?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-13')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-13"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      The amount of tracks to reach the $50 payout threshold can vary based on how much the DJs choose to share per track.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="producer-info-button-14"
                :class="searchHash === 'producer-info-14' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="producer-info-14-btn"
                  v-b-toggle="'producer-info-14'"
                  block
                  variant="info"
                  @click="scrollToSection('producer-info-14')"
                >
                  <div class="faq-title">
                    Why does Aslice hold payments until a producer has earned $50?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('producer-info-14')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="producer-info-14"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      The 50 dollar threshold is a function of our public beta. Our aim is to eventually pay monthly and reduce or remove this threshold entirely.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
        
        <div class="row payment-method-info" id="payment-method-info">
          <div class="row my-5 block-info">
            <h1 class="info-title">Accounting</h1>
            <span
              class="copy-faq-url"
              @click.stop="copyFaqUrl('payment-method-info')"
            >
              <img alt="" src="@/assets/images/link-icon.svg" /> 
            </span>
          </div>
          <div class="accordion" role="tablist">
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-1"
                :class="searchHash === 'payment-method-info-1' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-1-btn"
                  v-b-toggle="'payment-method-info-1'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-1')"
                >
                  <div class="faq-title">
                    How Often Do Producers Get Paid? Is There A Threshold For Payouts?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-1')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-1"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Producers get paid quarterly once they have reached the 50 dollar threshold. If a producer does not reach the threshold, earnings will be safely stored and rolled into the next quarter. Artists can locate all of their account information under the “Accounting” tab of the online dashboard.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-2"
                :class="searchHash === 'payment-method-info-2' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-2-btn"
                  v-b-toggle="'payment-method-info-2'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-2')"
                >
                  <div class="faq-title">
                    When will I see my accumulated earnings?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-2')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Producers will see their accumulated earnings at the end of the current quarter once they have had at least two unique track plays. Your quarterly reports can be located under the “Accounting” tab of the online dashboard.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-3"
                :class="searchHash === 'payment-method-info-3' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-3-btn"
                  v-b-toggle="'payment-method-info-3'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-3')"
                >
                  <div class="faq-title">
                    I’m a DJ. How do I download my playlist payment reports for tax accounting?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-3')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Playlist payments are shown in real time by downloading the current report or checking the playlist tab. Detailed breakdowns only appear once a playlist is fully processed. For more information, visit the “<a href="/online-dashboard/accounting" target="_blank">Accounting</a>” tab of the online user dashboard.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

             <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-8"
                :class="searchHash === 'payment-method-info-8' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-8-btn"
                  v-b-toggle="'payment-method-info-8'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-8')"
                >
                  <div class="faq-title">
                    How long does it take for my playlist payment to process?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-3')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Credit and debit card payments may take up to 24-48 hours to process after submission (via Stripe).
                      <br><br>
                      Other payment options such as SEPA, iDEAL (e-commerce payment system used for online banking in the Netherlands) etc.  may take up to 5-7 business days to process in our system.
                      <br><br>
                      For DJs using the invoice payment method: playlist approval will begin once the emailed invoice (via Stripe) has been paid.
                      <br><br>
                      For account support, please contact us via our <a href="/contact" target="_blank">Contact Page</a>.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-4"
                :class="searchHash === 'payment-method-info-4' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-4-btn"
                  v-b-toggle="'payment-method-info-4'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-4')"
                >
                  <div class="faq-title">
                    I’m a music producer. How can I see my accumulated earnings in the Aslice system?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-4')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Accumulated balances are displayed in the download report once you have at least two track plays and one past (closed) quarter. It’s good to remember: “Played On” track dates may not match “Processed” dates. Money earned may be credited after the actual date of play affecting which quarter it appears on.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-5"
                :class="searchHash === 'payment-method-info-5' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-5-btn"
                  v-b-toggle="'payment-method-info-5'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-5')"
                >
                  <div class="faq-title">
                    How does accounting work for group and duo music projects?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-5')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Money earned for <a href="/online-dashboard/preferences/profile" target="_blunk">duo/group membership(s)</a> are safely held until each member of the project is registered and verified in the Aslice system.
                      <br><br>
                      If you primarily DJ and/or produce music as a duo or group, we highly recommend that each member signs up individually with Aslice. Once verified by our admin team, each member can connect their duo/group project by filling in the 'Group Name' field in the “Preferences” tab of the online user dashboard.
                      <br><br>
                      Alternatively, users may sign up for the group project using a single account. However, if you choose to represent your duo/group as an individual account, the admin team will contact you during verification with a request that each group member signs a mandatory agreement waiver, allowing for single representation.
                      <br><br>
                      For technical support, send us a message through our <a href="/contact" target="_blunk">Contact</a> page.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-6"
                :class="searchHash === 'payment-method-info-6' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-6-btn"
                  v-b-toggle="'payment-method-info-6'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-6')"
                >
                  <div class="faq-title">
                    What happens if a DJ or producer choses to permanently delete their Aslice account?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-6')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      If a user deletes their account, existing and future earnings not yet paid out will be donated to charity on behalf of the Aslice Foundation. To learn more about the Aslice Foundation’s yearly charity vote and donation process, visit <a href="/theaslicefoundation" target="_blunk">The Aslice Foundation homepage.</a>
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-7"
                :class="searchHash === 'payment-method-info-7' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-7-btn"
                  v-b-toggle="'payment-method-info-7'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-7')"
                >
                  <div class="faq-title">
                    Why are producer payments shown as generalized “DJ transaction IDs” inside of accounting download reports?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-7')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Payment tracking details are individually displayed as “DJ transaction IDs” for anonymity and to maintain fair play and non-judgment of any DJ’s ability to share. The amount of money DJs choose to share is always private from the public and producers. We believe that sharing, at any amount, is better than not sharing at all.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card class="mb-1" no-body>
              <b-card-header
                id="payment-method-info-button-21"
                :class="searchHash === 'payment-method-info-21' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="payment-method-info-21-btn"
                  v-b-toggle="'payment-method-info-21'"
                  block
                  variant="info"
                  @click="scrollToSection('payment-method-info-21')"
                >
                  <div class="faq-title">
                    What does Aslice do with money accumulated for producers who are not yet registered in the Aslice system? How long can money sit in the Aslice system on hold for music producers?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('payment-method-info-21')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="payment-method-info-21"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Aslice is able to safely hold unregistered user money in a trust until it is claimed. Aslice attempts to reach out and track down every producer that has money being held in our system. Those that have earned over the $50 automatic payout threshold are prioritized by Aslice.
                    </span>
                    <br><br>
                    <span>
                      However, if we can’t reach the producer after several years*, their money will be moved into our non-profit<a href="/theaslicefoundation"> Aslice Foundation</a>, where it will eventually be donated to charities voted on by Aslice users. If you are a music producer, make sure to register via our <a href="/"> homepage</a>.
                    </span>
                    <br><br>
                    <span>
                      *Our accountant has indicated that we can safely hold money for producers in escrow for at least five years. We’re using this as our official duration, but may be able to extend longer.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          
          </div>
        </div>
        
        <div class="row fan-info" id="industryprofessionals-info">
          <div class="row my-5 block-info">
            <h1 class="info-title">Industry Professional</h1>
            <span
              class="copy-faq-url"
              @click.stop="copyFaqUrl('industryprofessionals-info')"
            >
              <img alt="" src="@/assets/images/link-icon.svg" /> 
            </span>
          </div>
          <div class="accordion" role="tablist">
            <b-card class="mb-1" no-body>
              <b-card-header
                id="industryprofessionals-info-button-1"
                :class="searchHash === 'industryprofessionals-info-1' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="industryprofessionals-info-1-btn"
                  v-b-toggle="'industryprofessionals-info-1'"
                  block
                  variant="info"
                  @click="scrollToSection('industryprofessionals-info-1')"
                >
                  <div class="faq-title">
                    What is Aslice for Industry Professionals and when will this section be open to the public?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('industryprofessionals-info-1')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="industryprofessionals-info-1"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      The Aslice for Industry Professionals page allows users to follow their favorite DJs and producers and receive a customizable feed of information about playlist uploads, new music, and other interesting data generated via Aslice.
                      <br /><br />
                      Official launch date pending; sign up now for more information and to be granted access once it becomes available!
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                id="industryprofessionals-info-button-2"
                :class="searchHash === 'industryprofessionals-info-2' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="industryprofessionals-info-2-btn"
                  v-b-toggle="'industryprofessionals-info-2'"
                  block
                  variant="info"
                  @click="scrollToSection('industryprofessionals-info-2')"
                >
                  <div class="faq-title">
                    What is the Support The Sound initiative?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('industryprofessionals-info-2')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="industryprofessionals-info-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Founded in 2024, Support The Sound is an initiative and global network of like-minded pillars of the electronic music community. Spearheaded by the renowned venues <a href="https://basementny.net/" target="_blunk">Basement New York</a> and Tbilisi's <a href="https://bassiani.com/light" target="_blunk">Bassiani</a>, Support The Sound is a shared vision to cultivate an all-encompassing strategy to both support international and local music scenes and to set a global model to compensate producers responsibly for the music played in their venues.
                      <br /><br />
                      DJs who are booked at a participating Support The Sound clubs, venues, festivals, events, etc. will be asked to share their playlists via Aslice to compensate the producers whose music they played at the paid event. To learn all about Support The Sound, visit <a href="http://www.supportthesound.org" target="_blunk">supportthesound.org</a> 
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="industryprofessionals-info-button-3"
                :class="searchHash === 'industryprofessionals-info-3' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="industryprofessionals-info-3-btn"
                  v-b-toggle="'industryprofessionals-info-3'"
                  block
                  variant="info"
                  @click="scrollToSection('industryprofessionals-info-3')"
                >
                  <div class="faq-title">
                    Who can join Support The Sound and how does it work?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('industryprofessionals-info-3')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="industryprofessionals-info-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      Support The Sound is open for all clubs, festivals, venues, and promoters to join.
                      <br /><br />
                      Participating venues and event organizers commit to Support The Sound by requesting (in 2024) and asking (in 2025 and onward) that all DJs who play their venue use Aslice to share their playlists. To learn all about Support The Sound, visit <a href="http://www.supportthesound.org" target="_blunk">supportthesound.org</a>
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            
            <b-card class="mb-1" no-body>
              <b-card-header
                id="industryprofessionals-info-button-4"
                :class="searchHash === 'industryprofessionals-info-4' ? 'highlighted' : ''"
                class="p-1"
                header-tag="header"
                role="tab"
              >
                <b-button
                  id="industryprofessionals-info-4-btn"
                  v-b-toggle="'industryprofessionals-info-4'"
                  block
                  variant="info"
                  @click="scrollToSection('industryprofessionals-info-4')"
                >
                  <div class="faq-title">
                    I want to join Support The Sound and is it free to sign up?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                    class="copy-faq-url"
                    @click.stop="copyFaqUrl('industryprofessionals-info-4')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>
                
              </b-card-header>
              <b-collapse
                id="industryprofessionals-info-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                      There is no cost to participate in Support The Sound, however, a commitment to the requirements is mandatory for eligibility. All clubs, festivals, venues, and promoters are welcome! To join the initiative, visit <a href="http://www.supportthesound.org" target="_blunk">supportthesound.org</a>
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card class="mb-1" no-body>
              <b-card-header
                  id="industryprofessionals-info-button-5"
                  :class="searchHash === 'industryprofessionals-info-5' ? 'highlighted' : ''"
                  class="p-1"
                  header-tag="header"
                  role="tab"
              >
                <b-button
                    id="industryprofessionals-info-5-btn"
                    v-b-toggle="'industryprofessionals-info-5'"
                    block
                    variant="info"
                    @click="scrollToSection('industryprofessionals-info-5')"
                >
                  <div class="faq-title">
                    Who should I contact for partnership / press inquiries at Aslice?
                  </div>
                  <span class="button-plus-img"></span>
                  <span
                      class="copy-faq-url"
                      @click.stop="copyFaqUrl('industryprofessionals-info-5')"
                  >
                    <img alt="" src="@/assets/images/link-icon.svg" />
                  </span>
                </b-button>

              </b-card-header>
              <b-collapse
                  id="industryprofessionals-info-5"
                  accordion="my-accordion"
                  role="tabpanel"
              >
                <b-card-body>
                  <b-card-text>
                    <span>
                     For partnership, collaboration, and press proposals, please contact The Aslice Team via our official <a href="/contact" target="_blank">Contact Page</a>.
                    </span>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
      </div>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script>
import Footer from "@/components/FooterNew";
export default {
  name: "FAQ",
  metaInfo: {
    title: "Aslice FAQ page",
    meta: [
      {
        property: "og:description",
        content:
          "Aslice’s Frequently Asked Questions | Aslice: the revolutionary, new software-based service and community platform that is reshaping the music industry. Resources for DJs, music producers, and professionals, visit aslice.com"
      },
      {
        name: "description",
        content:
          "Aslice’s Frequently Asked Questions | Aslice: the revolutionary, new software-based service and community platform that is reshaping the music industry. Resources for DJs, music producers, and professionals, visit aslice.com"
      }
    ]
  },
  components: {
    Footer
  },
  data() {
    return {
      currentHost: window.location.host,
      tiltes:['general-info','registration-info','dj-info','producer-info','payment-method-info','industryprofessionals-info']
    };
  },

  methods: {
    copyFaqUrl(url) {
      navigator.clipboard.writeText(
        `${window.location.host}/faq?anchor=${url}`
      );

      this.$root.$bvToast.toast("Success", {
        title: "FAQ url copied to clipboard",
        variant: "success",
        autoHideDelay: 5000,
        appendToast: false,
        solid: true
      });
    },
    scrollToSection(sectionName) {
      this.sectionNameAs = sectionName
      let collapses = document.getElementsByClassName('collapse');
      for (let i = 0; i < collapses.length; i++) {
        collapses[i].classList.remove('show')
        if((i+1) == collapses.length){
          document.getElementById(`${sectionName}`).classList.add('show')
          setTimeout(() => {
            const element = document.getElementById(`${sectionName}`);
            const headerNav = document.getElementById(`aslice-navbar`).getBoundingClientRect().height;
            const scrollPluse = element.getBoundingClientRect().top + scrollY - element.offsetTop - headerNav
            window.scrollTo({top: scrollPluse, behavior: "smooth"});
          },600);
        }
      }
    }
  },
  computed: {
    searchHash() {
      return this.$router.currentRoute.query.anchor;
    }
  },
  mounted() {
    // window.scrollTo({ top: 200, behavior: "smooth" });
    // const headerHeight = document.querySelector('#aslice-navbar').offsetHeight;

    if (
      this.$router &&
      this.$router.currentRoute &&
      this.$router.currentRoute.query
    ) {
      this.$nextTick(() => {
        setTimeout(() => {
          if (this.tiltes.includes(this.$router.currentRoute.query.anchor)) {
            const element = document.getElementById(`${this.$router.currentRoute.query.anchor}`);
            const scrollTop = element.offsetTop + 100;
            document
              .getElementById(`${this.$router.currentRoute.query.anchor}`)
              .click();
            window.scrollTo({
              top: scrollTop,
              behavior: "smooth"
            });
          } else if (document.getElementById(`${this.$router.currentRoute.query.anchor}-btn`)) {
            setTimeout(() => {
              document
                .getElementById(`${this.$router.currentRoute.query.anchor}-btn`)
                .click();
              document
                .getElementById(this.$router.currentRoute.query.anchor)
                .scrollIntoView({ block: "center", behavior: "smooth" });
            }, 100);
          }
        }, 100);
      });
    }
    // document.getElementById(this.$router.currentRoute.query);
  }
};
</script>

<style scoped>
.faq-page__header {
  background: white;
  padding: 20px;
  padding-bottom: 42px;
  border-bottom: 1px #C2C1BF solid;
}
.faq-page__header-title {
  font-size: 95px;
  line-height: 105px;
  color: #442671;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 55px;
    line-height: 52.25px;
  }
}
.faq-page__header-text {
  font-family: Graphik App, sans-serif;
  font-size: 24px;
  line-height: 28.9px;
  color: #8F7DAA;
  max-width: 716px;
  margin-bottom: 34px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 19.26px;
    margin-bottom: 12px;
  }
}
.faq-page__header-description {
  font-family: Graphik App, sans-serif;
  color: #442671;
  margin: 0;

  a {
    text-decoration: underline;
    color: #442671;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 14.45px;
  }
}
  .container {
    padding-bottom: 100px;
  }
  
  .container-fluid {
    padding: 0;
    background: #F2F1EF;
  }
  
  .info-title {
    font-family: "Europa-Regular";
    padding-left: 18px;
    /* width: 100%; */
    font-size: 36px;
    line-height: 42px;
    color: #442671;
    /* margin-bottom: 50px; */
    /* margin-top: 50px; */
  }
  
  .general-faq {
    margin-top: 0;
  }
  
  .accordion {
    width: 100%;
  }
  
  .accordion .btn-info,
  .card-text {
    font-family: "Roboto-Mono";
    text-align: left;
    outline: none;
    box-shadow: none;
    background: transparent;
    border: none;
    color: #75707b;
    font-size: 12px;
    line-height: 20px;
  }
  
  .accordion .btn-info:active,
  .accordion .btn-info:focus {
    outline: none !important;
    box-shadow: none !important;
    background: transparent !important;
  }
  
  .accordion .btn-info.not-collapsed {
    box-shadow: none;
    background: transparent;
  }
  
  .accordion .btn-info.not-collapsed .faq-title {
    color: #442671;
    font-weight: bold;
  }
  
  .card,
  .card-header {
    background: transparent;
    border-radius: 0;
    border: none;
  }
  
  .card.mb-1:first-child {
    border-top: 1px solid #75707b;
  }
  
  .card.mb-1 {
    border-bottom: 1px solid #75707b;
    overflow: visible;
  }
  
  .collapse {
    position: relative;
    width: 100%;
    z-index: 1;
    background: #f2f1ef;
  }
  .card-body {
    padding: 32px;
    padding-left: 15px;
  }
  
  .accordion button {
    padding: 16px 12px;
  }
  
  .not-collapsed .button-plus-img {
    background: url("../assets/images/faq/purple-plus.svg") !important;
    background-repeat: no-repeat !important;
  }
  .accordion .btn-info.not-collapsed {
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 999;
    background: #fff;
  }
  .accordion .btn-info{
    background: transparent !important;;
  }
  .accordion .button-plus-img {
    height: 20px;
    width: 20px;
    background: url("../assets/images/faq/plus.svg");
    position: absolute;
    right: 15px;
  }
  
  .accordion .copy-faq-url {
    position: absolute;
    right: 55px;
    /* top: 19px; */
    cursor: pointer;
  }
  
  .not-collapsed .copy-faq-url {
    top: 15px;
    
  }
  
  /* .show {
    transition: all 0s ease-in;
  } */
  .faq-title {
    display: inline-block;
    width: 94%;
  }
  
  .highlighted .faq-title {
    font-weight: bold;
    color: #442671;
  }
  .accordion .btn-info.not-collapsed{
    position: inherit;
  }
  @media screen and (max-width: 768px) {
    .faq-title {
      width: calc(100% - 75px);
    }
    /* .accordion .btn-info.not-collapsed {
      position: fixed;
      top: 60px;
      left: 0;
      z-index: 999;
      background: #fff!important;
      border: 1px solid #cecece
    }
    .accordion .btn-info{
      background: transparent !important;;
    } */
  }
  
  .block-info{
    align-items: center;
    justify-content:flex-start;
    .copy-faq-url{
      margin-left: 15px;
      cursor: pointer;
    }
  }
  .card-text {
    padding-left: 0;
  }
</style>
