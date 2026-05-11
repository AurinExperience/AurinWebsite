import { useTransform, useMotionTemplate, motion, type MotionValue } from 'motion/react';
import styles from './SplitCard.module.css';

interface SplitCardProps {
  i: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  letter: string;
  title: string;
  description: string;
}

const PEEK_PX = 18;
const SCALE_STEP = 0.05;
const OPACITY_STEP = 0.32;
const MIN_OPACITY = 0.18;
const MIN_SCALE = 0.84;
const BLUR_STEP = 1.5;
const MAX_BLUR = 4;
const ENTRY_OFFSET_PX = 60;
const ENTRY_SCALE = 0.94;

export default function SplitCard({
  i,
  total,
  scrollYProgress,
  letter,
  title,
  description,
}: SplitCardProps) {
  const segments = Math.max(total - 1, 1);
  const pts = Array.from({ length: total }, (_, k) => k / segments);

  const yVals: number[] = [];
  const scaleVals: number[] = [];
  const opacityVals: number[] = [];
  const blurVals: number[] = [];

  pts.forEach((_, j) => {
    const dist = i - j;
    if (dist > 0) {
      yVals.push(ENTRY_OFFSET_PX);
      scaleVals.push(ENTRY_SCALE);
      opacityVals.push(0);
      blurVals.push(0);
    } else if (dist === 0) {
      yVals.push(0);
      scaleVals.push(1);
      opacityVals.push(1);
      blurVals.push(0);
    } else {
      const k = Math.abs(dist);
      yVals.push(-k * PEEK_PX);
      scaleVals.push(Math.max(MIN_SCALE, 1 - k * SCALE_STEP));
      opacityVals.push(Math.max(MIN_OPACITY, 1 - k * OPACITY_STEP));
      blurVals.push(Math.min(MAX_BLUR, k * BLUR_STEP));
    }
  });

  const y = useTransform(scrollYProgress, pts, yVals);
  const scale = useTransform(scrollYProgress, pts, scaleVals);
  const opacity = useTransform(scrollYProgress, pts, opacityVals);
  const blur = useTransform(scrollYProgress, pts, blurVals);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      className={styles.cardWrapper}
      style={{ y, scale, opacity, filter, zIndex: i }}
    >
      <div className={styles.card}>
        <div className={styles.cardYellow}>
          <span className={styles.cardLetter} aria-hidden="true">{letter}</span>
          <p className={styles.cardTitle}>{title}</p>
        </div>
        <div className={`${styles.cardDark} ${i % 2 === 1 ? styles.cardDarkAlt : ''}`}>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
