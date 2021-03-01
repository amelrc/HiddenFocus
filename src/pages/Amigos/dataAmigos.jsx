import W8704 from '../../images/CAUC/WEB-8704-250kb.jpg';
import W8785 from '../../images/CAUC/WEB-8785-254kb.jpg';
import W0501 from '../../images/CAUC/WEB-P1050144-304KB.jpg';
import W8787 from '../../images/CAUC/WEB-8787-250kb.jpg';
import W0606 from '../../images/CAUC/WEB-1020606-250kb.jpg';
import W0106 from '../../images/CAUC/WEB-P1020106-312kb.jpg';
import W0767 from '../../images/CAUC/WEB-P1020767-254kb.jpg';
import W0871 from '../../images/CAUC/WEB-P1020871-371kb.jpg';
import W0939 from '../../images/CAUC/WEB-P1020939-249kb.jpg';
import W0144 from '../../images/CAUC/WEB-P1050144-304KB.jpg';

const T1 = (
	<p>
		Four artists, three Cuban and one Canadian, have come together to share the
		work they have rendered in painting, paper and photography. The expo
		celebrates the inner life of our cities and the bountiful nature that
		nurtures and surrounds them. Together, they invite us to reflect on the
		broad range of experiences that we share in common, and that lay the
		foundation for a life lived in harmony.
	</p>
);
const T2 = (
	<>
		Lilia Ulla was a teenager at the time of the Revolution, and has experienced
		firsthand the remaking of Cuban society as it unfolded over the decades.
		Through her eyes, we could still catch a glimpse of Havana’s former
		splendor.
		<br />
		<br />
		Affectionately known as Dr. Lilly, she introduced Lawrence and me to many of
		her friends, including Amel, Boris and Abel. New friendships quickly
		developed, and Lilia happily and capably took charge of making this expo
		happen.
	</>
);

export const PageOne = {
	left: [{ id: 1, image: W8704, text: T1 }],
	right: [{ id: 1, image: W8787 }],
};
export const PageTwo = {
	left: [{ id: 1, image: W0501, text: T2 }],
	right: [{ id: 1, image: W8785 }],
};

export const Expo = {
	left: [
		{ id: 1, image: W0939, css: { width: '60%', margin: 10 } },
		{ id: 2, image: W0606, css: { width: '60%', margin: 10 } },
	],
	center: [{ id: 1, image: W0106, css: { width: '100%' } }],
	right: [
		{ id: 1, image: W0767, css: { width: '60%', margin: 10 } },
		{ id: 2, image: W0871, css: { width: '60%', margin: 10 } },
	],
};
