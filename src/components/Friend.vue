<script setup>
  import person_blank from "@/assets/images/person_blank.png";

  import linkedin_icon  from "@/assets/data/socials/linkedin.svg"
  import github_icon    from "@/assets/data/socials/github.svg"
  
  defineProps({
    name: {
      type: String
    },
    photo: {
      type: String,
      default: person_blank
    },
    description: {
      type: String
    },
    website: {
      type: String
    },
    linkedin: {
      type: String
    },
    github: {
      type: String
    }
  })
</script>

<template>
  <div class="friend">
    <div class="friend-photo">
      <img :src="photo"/>
    </div>
    <div class="friend-about">
      <div class="friend-label">
        <div class="friend-name">
          <a v-if="website" :href="website" target="_blank">{{ name }}</a>
          <span v-else>{{ name }}</span>
        </div>
        <div class="friend-socials">
          <ul id="socials">
            <li v-if="linkedin">
              <a :href="linkedin" target="_blank">
                <img
                  class="social-icon"
                  :src="linkedin_icon"
                  :alt="linkedin"
                  :title="`${name} on LinkedIn`"
                />
              </a>
            </li>
            <li v-if="github">
              <a :href="github" target="_blank">
                <img
                  class="social-icon"
                  :src="github_icon"
                  :alt="github"
                  :title="`${name} on Github`"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <span class="friend-description" v-if="description">
        {{ description }}
      </span>
      <br>
      <br>
    </div>
  </div>
</template>

<style lang="scss">
  .friend {
    display: flex;
    flex-direction: row;
    flex: 1;

    .friend-photo {
      >img {
        border-radius: 20%;
        height: 8rem;
      }
    }

    .friend-about {
      position: relative;
      height: 100%;
      width: 100%;
      padding: 0 2rem;

      .friend-label {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .friend-name {
          font-weight: 900;
          float: left;
          font-size: 2.5rem;
          align-content: center;
        }

        .friend-socials {
          float: right;
          font-size: 2rem;

          ul#socials {
            list-style: none;
            display: table;
            margin: 0;

            li {
              float: left;
              margin: 0;

              .social-icon {
                width:  2rem;
                height: 2rem;
                margin: 0 0.5rem;

                filter: invert(65%) sepia(32%) saturate(3229%) hue-rotate(145deg) brightness(106%) contrast(105%);
              }
            }
          }
        }
      }

      .friend-description {
        font-style: italic;
      }
    }
  }

  @media (max-aspect-ratio: 4/3) {
    .friend {
      flex-direction: column;

      .friend-photo {
        margin: 0 auto;
      }

      .friend-about {
        padding: 1rem 0;
      }
    }
  }
</style>