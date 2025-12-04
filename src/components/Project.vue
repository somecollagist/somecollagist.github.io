<script setup>
  defineProps({
    name: {
      type: String
    },
    repo: {
      type: String
    },
    tags: {
      type: Object
    },
    description_brief: {
      type: String
    },
    photo: {
      type: String,
    }
  })
</script>

<template>
  <div class="project">
    <div class="project-photo">
      <img v-if="photo == 'uni'" src="../assets/images/st-andrews-vertical-monochrome-white.png"/>
      <img v-else-if="photo" :src="photo"/>
    </div>
    <div class="project-about">
      <div class="project-label monospace">
        <a class="project-name" v-if="repo" :href="`${repo}`" target="_blank">{{ name }}</a>
        <span class="project-name" v-else>{{ name }}</span>
        <div class="project-tags">
          [
          <span v-for="tag in tags.slice(0,5)">
            <span v-if="tags[tags.slice(0,5).length-1] != tag">
              {{ tag }},
            </span>
            <span v-else>
              {{ tag }}
            </span>
          </span>
          ]
        </div>
      </div>
      <hr>
      <span class="project-description" v-if="description_brief">
        {{ description_brief }}
      </span>
      <br>
      <br>
    </div>
  </div>
</template>

<style lang="scss">
  .project {
    display: flex;
    flex-direction: row;
    flex: 1;

    .project-photo {
      >img {
        border-radius: 20%;
        height: 8rem;
      }
    }

    .project-about {
      position: relative;
      height: 100%;
      width: 100%;
      padding: 0 2rem;

      .project-label {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .project-name {
          font-weight: 900;
          float: left;
          font-size: 2.5vmax;
          align-content: center;
        }

        .project-tags {
          float: right;
          font-size: 2rem;
        }
      }

      .project-description {
        font-style: italic;
      }
    }
  }

  @media (max-width: 4/3) {
    .project {
      flex-direction: column;

      .project-photo {
        margin: 0 auto;
      }

      .project-about {
        padding: 1rem 0;
      }
    }
  }
</style>