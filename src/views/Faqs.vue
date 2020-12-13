<template>
  <div class="faqs">
    <h1 style="font-weight: 900; margin-left: 1rem;">
      Frequently Asked Questions
    </h1>
    <div class="faq">
      <div class="title">What is your Returns Policy?</div>
      <div class="content">
        We get it, sometimes something just doesn't work for you and you want
        your money back. Don't worry, as long as an item is still in its
        original condition, we accept returns, subject to the rules below, which
        includes rules around fair use. None of these rules affect your
        statutory rights.
        <br />
        <br />If you return an item requesting a refund within 28 days of
        receiving it, we'll give you a full refund by way of the original
        payment method.
        <br />
        <br />If you return an item requesting a refund within 29 and 45 days of
        receiving it, we'll give you a PIGA LUKU gift voucher for the amount
        equivalent to the price you paid for them - click here to find out more
        info about items returned within 29 and 45 days.
        <br />
        <br />We aim to refund you within 14 days of receiving the returned
        item.
        <br />
        <br />If you request a refund for an item during the above time frames
        but you can't return it to us for some reason, please get in touch - but
        any refund will be at our discretion.
      </div>
    </div>
    <div class="faq">
      <div class="title">Can I track the delivery of my order?</div>
      <div class="content">
        If your order has been sent to you using a trackable service, you can
        follow its journey to you. You'll receive a shipping confirmation email
        from our warehouse once your order is on its way; simply click on your
        tracking link on this email to view the up to date tracking.
      </div>
    </div>
    <div class="faq">
      <div class="title">
        Will my parcel be charged customs and import charges?
      </div>
      <div class="content">
        In most cases, any customs or import duties are charged once the parcel
        reaches its destination country. The exception to this is for parcels
        being sent to Brazil, India, Israel, New Zealand, Malaysia, Indonesia
        and Thailand on our Standard Delivery service.
        <h3>Will I be charged handling fees or taxes?</h3>
        You may be charged for handling fees and taxes as your order passes
        through customs. Any charges on a parcel must be paid by the person
        receiving the parcel (this also applies to retail & wholesale
        customers).
        <h3>
          Can you tell me how I'll be charged for customs and import charges?
        </h3>
        PIGA LUKU has no control over these charges and we can't tell you what
        the cost would be, as customs policies and import duties vary widely
        from country to country.
        <br />
        <br />It might be a good idea to contact your local customs office for
        current charges before you order, so you are not surprised by charges
        you were not expecting.
      </div>
    </div>
    <div class="faq">
      <div class="title">
        What should I do if my order hasn't been delivered yet?
      </div>
      <div class="content">
        <h3>1. Check the delivery date</h3>
        Your estimated delivery date is in your Order Confirmation email –
        please allow until this date for your order to arrive.
        <h3>2. Track the order online</h3>
        You'll be able to follow your order if it's been sent with a trackable
        service. To check this, all you need to do is log into ‘My Account' and
        go to 'my orders'. If there is a 'track order' button, just click the
        link and you'll be able to follow your parcel. If the status shows
        ‘shipped', your order has been sent with your local postal service and
        isn't trackable.
        <br />
        <br />Your tracking link will be able to provide up to date information
        on the status of your order.
        <h3>3. Contact us</h3>
        If your estimated delivery date has passed and you haven't received your
        order, contact our Customer Care Team who can help you further.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: { inner: "Faqs | PigaLuku - Boy's Fashion" },
    meta: [
      {
        hid: "og:type",
        property: "og:type",
        content: `website`,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: `The One Stop Shop For Boy's Fashion`,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: `PigaLuku is the best online shop for real G's to find what best fits their style.`,
      },
      {
        hid: "og:image",
        property: "og:image",
        itemprop: "image",
        content: "https://ibb.co/JK5tWMW",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        itemprop: "image",
        content: "https://ibb.co/JK5tWMW",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: `https://rayauxey.tech`,
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: `summary_large_image`,
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
.faqs {
  // width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .faq {
    width: 75%;
    .title {
      padding: 1rem;
      background: var(--greenColor);
      color: white;
      font-size: 2em;
      font-weight: 900;
      @media (max-width: 700px) {
        font-size: 1.2em;
      }

      letter-spacing: 1px;
      position: sticky;
      top: calc(var(--navHeight));
    }

    .content {
      padding: 1rem;
      letter-spacing: 1px;
      border-left: 10px solid var(--backgroundColor);
    }
  }

  @media (max-width: 700px) {
    .faq {
      width: 100%;
    }
  }
}
</style>
