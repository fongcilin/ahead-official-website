import Image from 'next/image';
import { Mail } from 'lucide-react';

import { Typography } from '@/try-stuff/components/typography';
import { Icons } from '@/try-stuff/components/icons';
import { PinkBallsParallax } from '@/try-stuff/components/custom/pink-balls-parallax';
import { Button } from '@/try-stuff/components/ui/button';
import { cn } from '@/try-stuff/lib/utils';

const leaderships = [
  {
    id: 'andrea.wang',
    name: 'Andrea Wang',
    title: 'Co-founder, CEO',
    education: 'M.S.',
    intro:
      "Andrea Wang, co-founder and CEO of AHEAD Medicine Corporation, is a recognized leader at the convergence of entrepreneurship, medicine, and data science. A cancer survivor with a transformative vision for healthcare, Andrea's expertise is shaped by her academic tenure at Baylor College of Medicine and her impactful roles in the pharmaceutical industry. Since leading AHEAD's inception in 2017 alongside Kevin and Jeremy, she has steered the company through global challenges, solidifying its reputation in healthcare innovation. Not only has Andrea's work been published in leading scientific literature, but she is also an inventor of patents critical to AHEAD’s cutting-edge technology. Her commitment to integrating AI in healthcare aims to revolutionize patient care on a global scale.",
    mail: 'andrea.wang@aheadmedicine.com',
    linkedin: 'https://www.linkedin.com/in/andrea-yufen-wang/',
    image: '/images/team/andrea.wang2.jpg',
    imageSize: {
      width: 256,
      height: 383,
    },
  },
  {
    id: 'kevin.ko',
    name: 'Kevin Ko',
    title: 'Co-founder and Chief Medical Advisor',
    education: 'MD, PhD',
    intro:
      "Kevin Ko, co-founder and Chief Medical Advisor of AHEAD Medicine, is a distinguished hematologist with dual M.D. and Ph.D. degrees from National Taiwan University (NTU). His expertise spans the breadth of hematological disorders and the economic aspects of healthcare. Currently serves as the President of the Hematology Society of Taiwan, Dr. Ko also directs the Department of Hematological Oncology at NTU Cancer Center, and the Tai-Chen Cell Therapy Center, where he oversees leading-edge treatments like CAR T-cell therapy. Renowned for his clinical excellence and research, Dr. Ko has significantly influenced healthcare practices in Taiwan and the Asia-Pacific region, particularly in leukemia care and stem cell transplantation. His distinguished career and leadership are vital to AHEAD Medicine's mission to innovate and revolutionize healthcare and biomedical research.",
    mail: 'kevinkomd@aheadmedicine.com',
    linkedin: 'https://www.linkedin.com/in/bor-sheng-ko-5b669943',
    image: '/images/team/kevin.ko.jpg',
    imageSize: {
      width: 256,
      height: 278,
    },
  },
  {
    id: 'jeremy.lee',
    name: 'Jeremy Lee',
    title: 'Cofounder and Chief Technology Advisor ',
    education: 'PhD',
    intro:
      "Jeremy Lee, a co-founder of AHEAD Medicine and a distinguished electrical engineer, holds a Ph.D. from the University of Southern California (USC). He is a faculty member at National Tsing Hua University (NTHU), where he also co-chairs the nVIDA Innovation Center and directs the BIIC lab, advancing research in speech technology and health analytics. A senior member of IEEE, Jeremy's contributions have been recognized with several honors, including the prestigious 2024 National Science and Technology Council Outstanding Research Award. At AHEAD Medicine, he harnesses his machine learning expertise to spearhead the development of Cyto-copilot and other AI-enabled data analysis solution within AHEAD, significantly strengthening AHEAD's patent portfolio.",
    mail: 'jeremy.lee@aheadmedicine.com',
    linkedin: 'https://www.linkedin.com/in/chi-chun-jeremy-lee-9aa194178',
    image: '/images/team/jeremy.lee.jpg',
    imageSize: {
      width: 256,
      height: 272,
    },
  },
];

export default function About() {
  return (
    <main className="flex flex-col gap-y-20 pt-[120px]">
      <div className="flex flex-col gap-y-6">
        <PinkBallsParallax>
          <Typography.H1 className="mx-auto -mt-6 max-w-[600px] px-4 text-center">
            <span className="bg-rose-400 px-8 py-2 text-white">About Us</span>
          </Typography.H1>
          <Typography.P className="mx-auto max-w-[600px] px-4 pb-20 pt-10">
            AHEAD Medicine is a pioneering healthtech company. Our flagship
            solution, Cyto-copilot platform, is revolutionizing flow cytometry
            data analysis workflow. Cyto-copilot improves the efficiency,
            reproducibility and scalability of services for disease diagnosis,
            monitoring, and ensuring quality control in cell therapy.
          </Typography.P>
        </PinkBallsParallax>
      </div>
      <div className="flex flex-col gap-y-6">
        <PinkBallsParallax>
          <div className="mx-auto -mt-6 max-w-[600px] px-4 text-center">
            <Typography.H1 className="bg-rose-400 px-8 py-6 text-white">
              Mission Statement
            </Typography.H1>
          </div>
          <Typography.P className="mx-auto max-w-[600px] px-4 pb-20 pt-10">
            At AHEAD, we are committed to bridging the gap in healthcare equity
            and addressing the shortage of healthcare professionals through our
            advanced data analysis solutions. Our mission is to deliver systems
            that are swift, precise, consistent, and expandable. We strive to
            improve patient care by pioneering the development of cutting-edge
            healthcare technologies, propelling the industry toward a more
            innovative and efficient future.
          </Typography.P>
        </PinkBallsParallax>
      </div>
      <div className="flex flex-col gap-y-6">
        <PinkBallsParallax>
          <Typography.H1 className="mx-auto -mt-6 max-w-[600px] px-4 text-center">
            <span className="bg-rose-400 px-8 py-2 text-white">
              Core Leadership
            </span>
          </Typography.H1>
          <div className="mx-auto mt-6 max-w-[960px] px-4 pb-20 pt-10">
            {leaderships.map(
              (
                {
                  id,
                  image,
                  imageSize,
                  name,
                  title,
                  education,
                  mail,
                  linkedin,
                  intro,
                },
                i,
                arr,
              ) => (
                <div key={id} className="flex flex-col gap-y-6">
                  <div
                    className={cn(
                      'flex flex-col gap-y-3 border-b border-red-200 pb-6',
                      'md:flex-row md:justify-center md:gap-x-6 md:gap-y-0',
                      i !== 0 && 'pt-6',
                      i === arr.length - 1 && 'border-b-0 pb-0',
                    )}
                  >
                    <div className="flex flex-col gap-y-2 self-center">
                      <Image
                        src={image}
                        alt={`${name}'s photo`}
                        width={imageSize.width}
                        height={imageSize.height}
                        priority
                        className="rounded-xl"
                      />
                      <div className="flex flex-col">
                        <Typography.Muted>{name}</Typography.Muted>
                        <Typography.Muted>{title}</Typography.Muted>
                        <Typography.Muted>{education}</Typography.Muted>
                      </div>
                      <div className="flex gap-x-2">
                        <a href={`mailto:${mail}`}>
                          <Button variant="outline" size="icon">
                            <Mail className="h-7 w-7" />
                          </Button>
                        </a>
                        <a href={linkedin} target="_blank" rel="noreferrer">
                          <Button variant="outline" size="icon">
                            <Icons.Linkedin className="h-7 w-7" />
                          </Button>
                        </a>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Typography.P className="flex-1">{intro}</Typography.P>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </PinkBallsParallax>
      </div>
    </main>
  );
}
