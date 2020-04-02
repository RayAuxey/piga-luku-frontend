<template>
  <div class="holder">
    <div class="footer">
      <!-- <div class="socials">
      <div class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt
        />
      </div>
      <div class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/599px-Instagram_icon.png"
          alt
        />
      </div>
      <div class="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
          alt
        />
      </div>
      </div>-->

      <div class="column">
        <div class="title">HELP & INFORMATION</div>
        <ul class="contents">
          <li @click="$router.push({
            name: 'Team'
          })">Meet The Team</li>
          <li @click="$router.push({
            name: 'Faqs'
          })">Return Policy</li>
          <li @click="$router.push({
            name: 'Faqs'
          })">FAQs</li>
          <li @click="$router.push({
            name: 'ContactUs'
          })">Contact Us</li>
        </ul>
      </div>
      <div class="column">
        <div class="title">MORE FROM PIGA LUKU</div>
        <ul class="contents">
          <li>Investors Site</li>
          <li>Careers</li>
          <li>Corporate Responsibility</li>
        </ul>
      </div>

      <div class="column">
        <div class="title">STAY CONNECTED</div>
        <ul class="socials">
          <li>
            <i class="fab fa-facebook"></i>
          </li>
          <li>
            <i class="fab fa-instagram"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
        </ul>
      </div>

      <div class="column">
        <div class="title">JOIN OUR MAILING LIST</div>
        <div class="content">
          <div class="mailing">
            <input type="text" placeholder="Enter Your Email Address..." />
            <button>JOIN</button>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <img src="../assets/pigaluku2.svg" alt />
      <div class="content">
        <div>PRIVACY STATEMENT</div>
        <div>TERMS & CONDITIONS</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.holder {
  background: var(--backgroundColor);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0.5rem 0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

.footer {
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1500px;
  border-top: 1px solid var(--backgroundColor);
  background: var(--backgroundColor);
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;

  padding: 5rem;
  color: #bbb;

  .column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .content {
      margin: 0;
    }

    .title {
      color: #777;
      font-weight: 900;
      margin: 0;
    }
  }
}

@media (max-width: 700px) {
  .footer {
    flex-direction: column;
    padding: 2rem;
    > *:not(:nth-child(1)) {
      margin-top: 2rem;
    }
  }
}

.mailing {
  min-height: 40px;
  margin-top: 1rem;
  input {
    height: 100%;
    padding: 1rem;
    outline: none;
    border: none;
    background: #666;
    color: white;
    &::placeholder {
      color: #ccc;
    }
  }

  button {
    height: 100%;
    cursor: pointer;
    border: none;
    color: white;
    background: #333;
    outline: none;
    padding: 1rem;
  }
}

.socials {
  display: flex;
  padding: 0.5rem 0;

  i {
    margin-right: 2rem;
    transform: scale(1.5);
  }
}

.foot {
  background: black;
  height: 70px;
  padding: 0 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 90%;
  }
  .content {
    display: flex;
    margin: 0;

    > * {
      cursor: pointer;
      color: var(--backgroundColor);

      font-weight: 900;
    }
    :nth-child(1) {
      margin-right: 1rem;
    }
  }
}
@media (max-width: 700px) {
  .foot {
    padding: 0 2rem;
    display: flex;

    img {
      display: none;
    }

    .content {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
    }
  }
}
</style>