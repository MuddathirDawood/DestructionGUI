<template>
    <div class="blog-card">
        <div class="meta">
          <div class="photo">
            <img :src="weapons.image" alt="Weapon Image">
          </div>
        </div>
        <div class="description">
          <h1>{{weapons.name}}</h1>
          <h2>{{weapons.era_name}}</h2>
          <p class="read-more">
        		<router-link :to="{name: 'Weapon', params: {id: weapons.weapon_id}}" type="button" id="send">Details <span></span></router-link>
          </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['weapons']
}
</script>

<style scoped>
 .blog-card {
	 display: flex;
     height: 200px;
     width: 35rem;
	 flex-direction: column;
	 box-shadow: 0 3px 7px -1px rgba(0, 0, 0, .1);
	 margin-bottom: 1.6%;
	 background: #fff;
	 line-height: 1.4;
	 font-family: sans-serif;
	 border-radius: 5px;
	 overflow: hidden;
	 z-index: 0;
	 animation: move 2s ease-in-out infinite;
}
 .blog-card a {
	 color: inherit;
   width: 100px;
}
 .blog-card a:hover {
	 color: #5ad67d;
}
 .blog-card:hover .photo {
	 transform: scale(1.3) rotate(15deg);
}
 .blog-card .meta {
	 position: relative;
	 z-index: 0;
	 height: 200px;
}
 .blog-card .photo {
	 position: absolute;
     width: 100%;
     height: 100%;
	 top: 0;
	 right: 0;
	 bottom: 0;
	 left: 0;
	 background-size: cover;
	 background-position: center;
	 transition: transform 0.2s;
}

.photo>img{
    width: 100%;
    height: 100%;
}
 .blog-card .details, .blog-card .details ul {
	 margin: auto;
	 padding: 0;
	 list-style: none;
}
 .blog-card .details {
	 position: absolute;
	 top: 0;
	 bottom: 0;
	 left: -100%;
	 margin: auto;
	 transition: left 0.2s;
	 background: rgba(0, 0, 0, .6);
	 color: #fff;
	 padding: 10px;
	 width: 100%;
	 font-size: 0.9rem;
}
 .blog-card .details a {
	 text-decoration: dotted underline;
}
 .blog-card .details ul li {
	 display: inline-block;
}
 .blog-card .details .author:before {
	 font-family: FontAwesome;
	 margin-right: 10px;
	 content:'';
}
 .blog-card .details .date:before {
	 font-family: FontAwesome;
	 margin-right: 10px;
	 content: '';
}
 .blog-card .details .tags ul:before {
	 font-family: FontAwesome;
	 content: '';
	 margin-right: 10px;
}
 .blog-card .details .tags li {
	 margin-right: 2px;
}
 .blog-card .details .tags li:first-child {
	 margin-left: -4px;
}
 .blog-card .description {
	 padding: 1rem;
	 background: #E5E4E2;
	 position: relative;
	 z-index: 1;
}
.blog-card .description h1{
  font-family: 'Audiowide', cursive;
}
.blog-card .description h2 {
	 font-family: Poppins, sans-serif;
}
 .blog-card .description h1 {
	 line-height: 1;
	 margin: 0;
	 font-size: 1.7rem;
}
 .blog-card .description h2 {
	 font-size: .7rem;
	 font-weight: 300;
	 text-transform: uppercase;
	 color: #a2a2a2;
     font-family: 'Destruction';
	 margin-top: 5px;
}
 .blog-card .description .read-more {
	 text-align: left;
}
 .blog-card .description .read-more a {
	 color: #FFD700;
	 display: inline-block;
	 position: relative;
}
 .blog-card .description .read-more a:after {
	 content: '';
	 font-family: FontAwesome;
	 margin-left: -10px;
	 opacity: 0;
	 vertical-align: middle;
	 transition: margin 0.3s, opacity 0.3s;
}
 .blog-card .description .read-more a:hover:after {
	 margin-left: 5px;
	 opacity: 1;
}
 .blog-card p {
	 position: relative;
	 margin: 1rem 0 0;
}
 .blog-card p:first-of-type {
	 margin-top: 1.25rem;
}
 .blog-card p:first-of-type:before {
  content: '';
	 position: absolute;
	 height: 5px;
	 background: #FFD700;
	 width: 50px;
	 top: -0.75rem;
	 border-radius: 3px;
}
 .blog-card:hover .details {
	 left: 0%;
}

#send {
 border: none;
 display: block;
 position: relative;
 padding: 10px 15px 10px 18px;
 font-size: 15px;
 background: transparent;
 overflow: hidden;
 color: black;
 text-transform: uppercase;
 z-index: 1;
 font-family: inherit;
 font-weight: 500;
}

#send span {
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background: transparent;
 z-index: -1;
 border: 3px solid #FFD700;
}

#send span::before {
 content: "";
 display: block;
 position: absolute;
 width: 8%;
 height: 500%;
 background: #E5E4E2;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(-60deg);
 transition: all 0.3s;
}

#send:hover span::before {
 transform: translate(-50%, -50%) rotate(-90deg);
 width: 100%;
 background: #FFD700;
}

 @media (min-width: 500px) {
	 .blog-card {
		 flex-direction: row;
		 max-width: 75%;
	}
	 .blog-card .meta {
		 flex-basis: 40%;
		 height: auto;
	}
	 .blog-card .description {
		 flex-basis: 60%;
	}
	 .blog-card .description:before {
		 transform: skewX(-3deg);
     content: '';
		 background: #E5E4E2;
		 width: 30px;
		 position: absolute;
		 left: -10px;
		 top: 0;
		 bottom: 0;
		 z-index: -1;
	}
	 .blog-card.alt {
		 flex-direction: row-reverse;
	}
	 .blog-card.alt .description:before {
		 left: inherit;
		 right: -10px;
		 transform: skew(3deg);
	}
	 .blog-card.alt .details {
		 padding-left: 25px;
	}
}

@media (max-width: 500px){
	.blog-card{
		height: 335px;
	}
}

@keyframes move{
	0%{
		transform: scale(1);
	}
	50%{
		transform: scale(1.005);
	}
	100%{
		transform: scale(1);
	}
}
</style>