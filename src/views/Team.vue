<template>
  <div class="team">
    <div class="title">Meet our team</div>
    <div class="members">
      <div class="member">
        <img src="../assets/protoje.jpg" alt />
        <div class="name">Raymond Nyaga</div>
        <div class="role">Chief Executive Officer</div>
        <div
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur voluptate laborum sed et earum. Natus quisquam culpa eaque. Nostrum nihil nisi officiis et aliquid sint voluptas cum a repellendus.</div>
      </div>
      <div class="member">
        <img
          src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
          alt
        />
        <div class="name">Elon Musk</div>
        <div class="role">Chief Technology Officer</div>
        <div
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur voluptate laborum sed et earum. Natus quisquam culpa eaque. Nostrum nihil nisi officiis et aliquid sint voluptas cum a repellendus.</div>
      </div>
      <div class="member">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gergely_Boszormenyi_Nagy_in_Budapest%2C_2019.jpg/1200px-Gergely_Boszormenyi_Nagy_in_Budapest%2C_2019.jpg"
          alt
        />
        <div class="name">Dan Mase</div>
        <div class="role">Lead Designer</div>
        <div
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur voluptate laborum sed et earum. Natus quisquam culpa eaque. Nostrum nihil nisi officiis et aliquid sint voluptas cum a repellendus.</div>
      </div>
      <div class="member">
        <img
          src="https://media1.popsugar-assets.com/files/thumbor/hNvzq510q1F2Pw2nZdl63XFL9Lk/205x58:1065x918/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/11/20/824/n/1922398/a87578145dd58a33b4f297.96855809_/i/Billie-Eilish.jpg"
          alt
        />
        <div class="name">Billie Eilish</div>
        <div class="role">Head of Curation</div>
        <div
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur voluptate laborum sed et earum. Natus quisquam culpa eaque. Nostrum nihil nisi officiis et aliquid sint voluptas cum a repellendus.</div>
      </div>
      <div class="member">
        <img
          src="https://media.npr.org/assets/img/2018/03/17/ap_18033636089764_sq-84ebd546b0e2e862c2de61ea385262435a6a19ff-s800-c85.jpg"
          alt
        />
        <div class="name">Rihanna</div>
        <div class="role">Head of Public Relations</div>
        <div
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur voluptate laborum sed et earum. Natus quisquam culpa eaque. Nostrum nihil nisi officiis et aliquid sint voluptas cum a repellendus.</div>
      </div>
      <div class="member">
        <img src="https://pbs.twimg.com/profile_images/962887110377201664/FgaRNez0.jpg" alt />
        <div class="name">Jay Manuel</div>
        <div class="role">Fashion Designer</div>
        <div
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tenetur voluptate laborum sed et earum. Natus quisquam culpa eaque. Nostrum nihil nisi officiis et aliquid sint voluptas cum a repellendus.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.team {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin: 2rem;
    font-weight: 900;
    font-size: 1.5em;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .members {
    display: flex;
    flex-wrap: wrap;

    .member {
      width: 33%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      align-items: center;
      img {
        width: 80%;

        border-radius: 50%;
        margin-bottom: 1rem;
      }

      .name {
        color: var(--greenColor);
        font-weight: 900;
        font-size: 1.5em;
        margin-bottom: 0.5rem;
      }
      .role {
        font-weight: 900;
        font-size: 1.2em;
        margin-bottom: 0.5rem;
      }

      .description {
        display: none;
        font-weight: 300;
        font-size: 1.2em;
        letter-spacing: 1px;
      }
    }

    @media (max-width: 700px) {
      .member {
        width: 100%;
      }
    }
  }
}
</style>