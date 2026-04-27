import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  AudioWaveform,
  BadgeCheck,
  Binary,
  BotOff,
  BrainCircuit,
  Camera,
  ChevronRight,
  Code2,
  Eye,
  Fingerprint,
  Gauge,
  LockKeyhole,
  Mic,
  MonitorCheck,
  Network,
  Radar,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import * as THREE from "three";
import "./styles.css";

function useReveal() {
  useEffect(() => {
    const items = [...document.querySelectorAll(".reveal")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function useScrollMetrics() {
  const progress = useRef(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll", progress.current.toFixed(4));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}

function HeroScene({ scrollProgress }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.6, 7.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambient = new THREE.AmbientLight(0xffffff, 0.58);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(3, 6, 5);
    scene.add(key);

    const keyGlow = new THREE.PointLight(0xf2f2f2, 4.4, 12);
    keyGlow.position.set(-3, 1.8, 3);
    scene.add(keyGlow);

    const rimGlow = new THREE.PointLight(0xa9a9a9, 2.1, 10);
    rimGlow.position.set(3, -1, 3);
    scene.add(rimGlow);

    const createPentagonPath = (radius, offset = -Math.PI / 2, clockwise = false) => {
      const path = new THREE.Path();
      for (let i = 0; i < 5; i += 1) {
        const direction = clockwise ? -1 : 1;
        const angle = offset + direction * (i / 5) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (i === 0) path.moveTo(x, y);
        else path.lineTo(x, y);
      }
      path.closePath();
      return path;
    };

    const createPentagonRing = (outerRadius, innerRadius) => {
      const shape = new THREE.Shape(createPentagonPath(outerRadius).getPoints());
      shape.holes.push(createPentagonPath(innerRadius, -Math.PI / 2, true));
      return shape;
    };

    const facilityMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x17191d,
      metalness: 0.72,
      roughness: 0.24,
      clearcoat: 0.7,
      clearcoatRoughness: 0.18,
      emissive: 0x080808,
    });
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0x3b3f46,
      emissive: 0x0c0c0c,
      metalness: 0.5,
      roughness: 0.2,
    });
    const courtyardMaterial = new THREE.MeshBasicMaterial({
      color: 0xf5f5f5,
      transparent: true,
      opacity: 0.32,
      side: THREE.DoubleSide,
    });
    const trimMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f1f1,
      emissive: 0xbdbdbd,
      emissiveIntensity: 0.54,
      metalness: 0.55,
      roughness: 0.18,
    });
    const windowMaterial = new THREE.MeshBasicMaterial({
      color: 0xf7f7f7,
      transparent: true,
      opacity: 0.78,
    });
    const floorMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x090a0c,
      metalness: 0.64,
      roughness: 0.3,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.28,
    });
    const faintLineMaterial = new THREE.LineBasicMaterial({
      color: 0xbdbdbd,
      transparent: true,
      opacity: 0.18,
    });

    const commandBase = new THREE.Group();
    commandBase.rotation.y = Math.PI / 5;
    group.add(commandBase);

    const floorShape = new THREE.Shape(createPentagonPath(2.55).getPoints());
    const floorPlate = new THREE.Mesh(
      new THREE.ExtrudeGeometry(floorShape, {
        depth: 0.16,
        bevelEnabled: true,
        bevelSize: 0.04,
        bevelThickness: 0.04,
        bevelSegments: 4,
      }),
      floorMaterial,
    );
    floorPlate.rotation.x = -Math.PI / 2;
    floorPlate.position.y = -1.12;
    commandBase.add(floorPlate);

    const lowerDeck = new THREE.Mesh(
      new THREE.CylinderGeometry(2.82, 2.38, 0.18, 5),
      new THREE.MeshPhysicalMaterial({
        color: 0x050506,
        metalness: 0.7,
        roughness: 0.34,
        clearcoat: 0.9,
      }),
    );
    lowerDeck.position.y = -1.28;
    lowerDeck.rotation.y = Math.PI / 5;
    group.add(lowerDeck);

    const rings = [
      { outer: 2.18, inner: 1.64, y: -0.72, height: 0.34 },
      { outer: 1.54, inner: 1.1, y: -0.52, height: 0.28 },
      { outer: 1.0, inner: 0.52, y: -0.35, height: 0.22 },
    ];

    rings.forEach((ring, index) => {
      const geometry = new THREE.ExtrudeGeometry(createPentagonRing(ring.outer, ring.inner), {
        depth: ring.height,
        bevelEnabled: true,
        bevelSize: 0.035,
        bevelThickness: 0.035,
        bevelSegments: 3,
      });
      const mesh = new THREE.Mesh(geometry, index === 0 ? facilityMaterial : roofMaterial);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = ring.y;
      commandBase.add(mesh);

      const trim = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(
          createPentagonPath(ring.outer)
            .getPoints(5)
            .map((point) => new THREE.Vector3(point.x, ring.y + ring.height + 0.02, point.y)),
        ),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.34 }),
      );
      commandBase.add(trim);

      for (let i = 0; i < 5; i += 1) {
        const angle = -Math.PI / 2 + (i / 5) * Math.PI * 2;
        const nextAngle = -Math.PI / 2 + ((i + 1) / 5) * Math.PI * 2;
        const midAngle = (angle + nextAngle) / 2;
        const rib = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(Math.cos(midAngle) * ring.inner, ring.y + ring.height + 0.04, Math.sin(midAngle) * ring.inner),
            new THREE.Vector3(Math.cos(midAngle) * ring.outer, ring.y + ring.height + 0.04, Math.sin(midAngle) * ring.outer),
          ]),
          faintLineMaterial,
        );
        commandBase.add(rib);
      }
    });

    const perimeterColumns = [];
    for (let i = 0; i < 5; i += 1) {
      const angle = -Math.PI / 2 + (i / 5) * Math.PI * 2;
      const column = new THREE.Group();
      const plinth = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 0.16, 5), floorMaterial);
      const light = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), windowMaterial.clone());
      light.position.y = 0.15;
      column.add(plinth, light);
      column.position.set(Math.cos(angle) * 2.2, -0.82, Math.sin(angle) * 2.2);
      perimeterColumns.push(column);
      commandBase.add(column);
    }

    const courtyard = new THREE.Mesh(
      new THREE.ShapeGeometry(new THREE.Shape(createPentagonPath(0.46).getPoints())),
      courtyardMaterial,
    );
    courtyard.rotation.x = -Math.PI / 2;
    courtyard.position.y = -0.08;
    commandBase.add(courtyard);

    const commandCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.23, 0.33, 0.62, 5),
      new THREE.MeshPhysicalMaterial({
        color: 0x101114,
        metalness: 0.78,
        roughness: 0.18,
        clearcoat: 1,
        emissive: 0x2b2b2b,
      }),
    );
    commandCore.position.y = 0.18;
    commandCore.rotation.y = Math.PI / 5;
    commandBase.add(commandCore);

    const coreHalo = new THREE.Mesh(
      new THREE.TorusGeometry(0.46, 0.012, 8, 90),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.36 }),
    );
    coreHalo.rotation.x = Math.PI / 2;
    coreHalo.position.y = 0.51;
    commandBase.add(coreHalo);

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.026, 1.12, 10), trimMaterial);
    antenna.position.y = 1.14;
    commandBase.add(antenna);

    const antennaRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.18, 0.01, 8, 64),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.46 }),
    );
    antennaRing.rotation.x = Math.PI / 2;
    antennaRing.position.y = 1.58;
    commandBase.add(antennaRing);

    const lockBody = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.28, 0.12), trimMaterial);
    lockBody.position.set(0, 0.66, 0);
    commandBase.add(lockBody);

    const shackle = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.022, 12, 32, Math.PI), trimMaterial);
    shackle.rotation.z = Math.PI;
    shackle.position.set(0, 0.82, 0);
    commandBase.add(shackle);

    const windowPanels = [];
    for (let side = 0; side < 5; side += 1) {
      for (let slot = -2; slot <= 2; slot += 1) {
        const angle = -Math.PI / 2 + (side / 5) * Math.PI * 2;
        const sideAngle = angle + Math.PI / 5;
        const radius = 1.78;
        const panel = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.018, 0.035), windowMaterial);
        panel.position.set(
          Math.cos(sideAngle) * radius + Math.cos(angle) * slot * 0.11,
          -0.28,
          Math.sin(sideAngle) * radius + Math.sin(angle) * slot * 0.11,
        );
        panel.rotation.y = -sideAngle;
        windowPanels.push(panel);
        commandBase.add(panel);
      }
    }

    const entranceMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1d1f23,
      metalness: 0.55,
      roughness: 0.26,
      clearcoat: 0.7,
    });
    for (let i = 0; i < 5; i += 1) {
      const angle = -Math.PI / 2 + (i / 5) * Math.PI * 2;
      const entry = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.08, 0.7), entranceMaterial);
      entry.position.set(Math.cos(angle) * 2.24, -0.96, Math.sin(angle) * 2.24);
      entry.rotation.y = -angle;
      commandBase.add(entry);
    }

    const sweepShape = new THREE.Shape();
    sweepShape.moveTo(0, 0);
    const sweepRadius = 3.1;
    for (let i = 0; i <= 16; i += 1) {
      const angle = -0.22 + (i / 16) * 0.44;
      sweepShape.lineTo(Math.cos(angle) * sweepRadius, Math.sin(angle) * sweepRadius);
    }
    sweepShape.closePath();
    const scanner = new THREE.Mesh(
      new THREE.ShapeGeometry(sweepShape),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.055,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    scanner.rotation.x = -Math.PI / 2;
    scanner.position.y = -0.9;
    group.add(scanner);

    const orbitLines = [];
    for (let i = 0; i < 3; i += 1) {
      const points = [];
      for (let j = 0; j <= 128; j += 1) {
        const angle = (j / 128) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * (2.75 + i * 0.22), Math.sin(angle) * (0.42 + i * 0.08) - 0.18, 0));
      }
      const orbit = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(points),
        (i === 0 ? lineMaterial : faintLineMaterial).clone(),
      );
      orbit.rotation.y = i * 0.72 + 0.3;
      orbit.rotation.z = -0.18 + i * 0.12;
      orbitLines.push(orbit);
      group.add(orbit);
    }

    const baseRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.65, 0.018, 10, 160),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.58 }),
    );
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = -0.96;
    group.add(baseRing);

    const outerRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.28, 0.012, 8, 180),
      new THREE.MeshBasicMaterial({ color: 0xb8b8b8, transparent: true, opacity: 0.38 }),
    );
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.y = -1.03;
    group.add(outerRing);

    const towerMaterial = new THREE.MeshStandardMaterial({
      color: 0x2f3339,
      emissive: 0x090909,
      metalness: 0.62,
      roughness: 0.28,
    });
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const towers = [];

    for (let i = 0; i < 10; i += 1) {
      const angle = (i / 10) * Math.PI * 2;
      const radius = i % 2 === 0 ? 3.05 : 2.55;
      const tower = new THREE.Group();
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.065, 0.78, 6), towerMaterial);
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.095, 16, 16), nodeMaterial);
      node.position.y = 0.43;
      tower.add(post, node);
      tower.position.set(Math.cos(angle) * radius, -0.78, Math.sin(angle) * radius - 0.12);
      tower.lookAt(0, -0.42, -0.12);
      towers.push(tower);
      group.add(tower);
    }

    const beamMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.38,
    });
    const amberBeamMaterial = new THREE.LineBasicMaterial({
      color: 0x9c9c9c,
      transparent: true,
      opacity: 0.24,
    });
    const beams = [];
    towers.forEach((tower, index) => {
      const points = [
        new THREE.Vector3(tower.position.x, tower.position.y + 0.44, tower.position.z),
        new THREE.Vector3(0, 0.5, 0),
      ];
      const beam = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        index % 3 === 0 ? amberBeamMaterial : beamMaterial,
      );
      beams.push(beam);
      group.add(beam);
    });

    const dotsGeometry = new THREE.BufferGeometry();
    const positions = [];
    for (let i = 0; i < 240; i += 1) {
      const radius = 1.9 + Math.random() * 2.3;
      const angle = Math.random() * Math.PI * 2;
      positions.push(
        Math.cos(angle) * radius,
        -1.42 + Math.random() * 2.95,
        Math.sin(angle) * radius - 0.35,
      );
    }
    dotsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const dots = new THREE.Points(
      dotsGeometry,
      new THREE.PointsMaterial({
        color: 0xf2f2f2,
        size: 0.025,
        transparent: true,
        opacity: 0.72,
      }),
    );
    group.add(dots);

    const grid = new THREE.GridHelper(7.6, 18, 0x6f6f6f, 0x202020);
    grid.position.y = -1.48;
    grid.position.z = -0.38;
    grid.material.transparent = true;
    grid.material.opacity = 0.38;
    group.add(grid);

    const mouse = new THREE.Vector2(0, 0);
    const handlePointer = (event) => {
      const bounds = mount.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      mouse.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });

    const setSize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };
    setSize();
    window.addEventListener("resize", setSize);

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const progress = scrollProgress.current || 0;
      group.rotation.y = elapsed * 0.13 + mouse.x * 0.18 + progress * 1.45;
      group.rotation.x = -0.08 + mouse.y * 0.09 + progress * 0.16;
      group.position.y = Math.sin(elapsed * 0.85) * 0.05 - progress * 0.18;
      commandBase.rotation.z = Math.sin(elapsed * 0.3) * 0.015;
      baseRing.rotation.z = elapsed * 0.5;
      outerRing.rotation.z = -elapsed * 0.28;
      commandCore.rotation.y = Math.PI / 5 + Math.sin(elapsed * 0.8) * 0.16;
      coreHalo.rotation.z = elapsed * 0.65;
      antennaRing.rotation.z = -elapsed * 0.8;
      scanner.rotation.z = elapsed * 0.48;
      orbitLines.forEach((orbit, index) => {
        orbit.rotation.x = Math.sin(elapsed * 0.22 + index) * 0.08;
        orbit.material.opacity = 0.1 + Math.sin(elapsed * 0.9 + index) * 0.04 + 0.11;
      });
      perimeterColumns.forEach((column, index) => {
        column.children[1].material.opacity = 0.38 + Math.sin(elapsed * 1.6 + index) * 0.18 + 0.22;
      });
      dots.rotation.y = -elapsed * 0.08;
      windowPanels.forEach((panel, index) => {
        panel.material.opacity = 0.42 + Math.sin(elapsed * 2 + index * 0.6) * 0.18 + 0.18;
      });
      beams.forEach((beam, index) => {
        beam.material.opacity = 0.2 + Math.sin(elapsed * 2.5 + index) * 0.1 + 0.2;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", setSize);
      window.removeEventListener("pointermove", handlePointer);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
    };
  }, [scrollProgress]);

  return (
    <div className="hero-visual" aria-label="Proctored.one secure assessment command illustration">
      <div className="scene-frame" ref={mountRef} />
      <div className="scan-caption">
        <span />
        Scanning identity, screen, room, audio, and code behavior
      </div>
      <div className="hud-card hud-card-top">
        <span>AI covert aid risk</span>
        <strong>0.98</strong>
      </div>
      <div className="hud-card hud-card-bottom">
        <span>Pentagon-style perimeter</span>
        <strong>Active</strong>
      </div>
      <div className="facility-tag">
        <span>Secure Assessment Command Facility</span>
        <strong>Proctored.one</strong>
      </div>
      <div className="meaning-panel" aria-label="What the illustration means">
        <div className="meaning-card meaning-card-one">
          <LockKeyhole size={16} />
          <div>
            <strong>Secure perimeter</strong>
            <span>Identity, camera, browser, and session state are sealed before the assessment starts.</span>
          </div>
        </div>
        <div className="meaning-card meaning-card-two">
          <BrainCircuit size={16} />
          <div>
            <strong>Signal fusion</strong>
            <span>Screen activity, answer cadence, gaze, audio, and code behavior are judged together.</span>
          </div>
        </div>
        <div className="meaning-card meaning-card-three">
          <BadgeCheck size={16} />
          <div>
            <strong>Review evidence</strong>
            <span>Suspicious moments become a clean timeline for reviewers, not vague alerts.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const workflows = [
  {
    icon: MonitorCheck,
    title: "Online exams",
    text: "Lock the test window, verify identity, monitor behavior, and produce a defensible audit trail for every session.",
  },
  {
    icon: Camera,
    title: "Live interviews",
    text: "Spot off-screen prompting, hidden assistants, unusual answer latency, and suspicious gaze or audio patterns.",
  },
  {
    icon: Code2,
    title: "Coding rounds",
    text: "Correlate code edits, paste bursts, browser focus, AI-shaped responses, and problem-solving rhythm in real time.",
  },
  {
    icon: BadgeCheck,
    title: "Certifications",
    text: "Create a reliable testing perimeter for high-stakes credentials, hiring pipelines, training, and compliance checks.",
  },
];

const detections = [
  { icon: BotOff, label: "Invisible AI overlay detection" },
  { icon: Eye, label: "Gaze, presence, and attention signals" },
  { icon: AudioWaveform, label: "Voice, whisper, and room anomaly analysis" },
  { icon: Fingerprint, label: "Device and browser environment fingerprinting" },
  { icon: Binary, label: "Code authorship and paste pattern intelligence" },
  { icon: Network, label: "Side-channel and session integrity monitoring" },
];

const commandStack = [
  "Identity verification",
  "Secure browser layer",
  "Screen and camera intelligence",
  "AI-assisted cheating classifiers",
  "Real-time risk escalation",
  "Reviewer-ready evidence vault",
];

function CapabilityCard({ icon: Icon, label }) {
  return (
    <div className="capability-card reveal">
      <Icon size={22} />
      <span>{label}</span>
    </div>
  );
}

function App() {
  useReveal();
  const scrollProgress = useScrollMetrics();

  return (
    <main>
      <div className="site-shell">
        <nav className="nav">
          <a className="brand" href="#top" aria-label="Proctored.one home">
            <span className="brand-mark">
              <ShieldCheck size={18} />
            </span>
            Proctored.one
          </a>
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#workflows">Use cases</a>
            <a href="#detection">Detection</a>
            <a href="#setup">Setup</a>
          </div>
          <a className="nav-cta" href="#demo">
            Join waitlist <ChevronRight size={16} />
          </a>
        </nav>

        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <Radar size={16} />
              Coming soon • private beta
            </div>
            <h1>Proctored.one is coming soon</h1>
            <p className="hero-lede">
              A new embedded proctoring command layer is launching soon to turn any exam, interview, coding round, or assessment website into a secure session without rebuilding your workflow.
            </p>
            <div className="launch-panel" aria-label="Launch status">
              <div>
                <span>Launch mode</span>
                <strong>Private beta</strong>
              </div>
              <div>
                <span>Now preparing</span>
                <strong>Embeds for LMS, ATS, video, and coding flows</strong>
              </div>
              <div>
                <span>Early access</span>
                <strong>Opening soon</strong>
              </div>
            </div>
            <div className="hero-intel" aria-label="Security capabilities">
              <span>
                <Activity size={15} />
                Launch-ready risk command center
              </span>
              <span>
                <BotOff size={15} />
                Invisible AI assistance detection
              </span>
              <span>
                <ShieldCheck size={15} />
                Embedded inside your workflow
              </span>
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#demo">
                Join early access <LockKeyhole size={18} />
              </a>
              <a className="secondary-button" href="#detection">
                Explore detection grid <ScanEye size={18} />
              </a>
            </div>
            <div className="hero-metrics" aria-label="Platform highlights">
              <div>
                <strong>Beta</strong>
                <span>opening soon</span>
              </div>
              <div>
                <strong>No setup</strong>
                <span>built for existing flows</span>
              </div>
              <div>
                <strong>AI-aware</strong>
                <span>hidden assistance detection</span>
              </div>
            </div>
          </div>
          <HeroScene scrollProgress={scrollProgress} />
        </section>
      </div>

      <section className="strip reveal" aria-label="Security posture">
        <span>Private beta opening soon</span>
        <span>Built for high-stakes assessments</span>
        <span>Human review ready evidence</span>
        <span>Embeds inside existing websites</span>
      </section>

      <section className="section" id="workflows">
        <div className="section-heading reveal">
          <div className="eyebrow">
            <Workflow size={16} />
            One proctoring layer, every assessment
          </div>
          <h2>Embed a secure perimeter into the flow you already use.</h2>
          <p>
            Proctored.one is designed to sit inside your LMS, ATS, interview tool, coding platform, or custom assessment website, so teams can raise trust without rebuilding the experience.
          </p>
        </div>
        <div className="workflow-grid">
          {workflows.map((item) => (
            <article className="workflow-card reveal" key={item.title}>
              <item.icon size={28} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="threat-section" id="detection">
        <div className="threat-copy reveal">
          <div className="eyebrow">
            <BrainCircuit size={16} />
            Hidden AI cheating countermeasures
          </div>
          <h2>Invisible AI assistance gets exposed by full-context detection.</h2>
          <p>
            Candidates can attempt to use hidden AI interview helpers, including tools marketed like Ghost, during interviews, coding rounds, or exams. Proctored.one treats those tools as covert assistance risks and looks for the signals they leave behind instead of relying on a single obvious screen event.
          </p>
          <p>
            The platform combines screen intelligence, camera and microphone signals, session telemetry, answer timing, code behavior, and AI-pattern analysis to identify hidden assistance, escalate suspicious activity, and preserve evidence for review.
          </p>
        </div>
        <div className="threat-console reveal" aria-label="Invisible AI assistance detection diagram">
          <div className="console-top">
            <span>Assessment Threat Model</span>
            <strong>Detecting</strong>
          </div>
          <div className="assessment-screen">
            <div className="screen-toolbar">
              <span />
              <span />
              <span />
              <strong>Coding interview</strong>
            </div>
            <div className="candidate-pane">
              <div className="candidate-camera">
                <Camera size={24} />
                <span>Candidate view</span>
              </div>
              <div className="answer-pane">
                <Code2 size={22} />
                <span>Live answer stream</span>
              </div>
            </div>
            <div className="hidden-ai-layer">
              <BotOff size={18} />
              <strong>Invisible AI helper</strong>
              <span>covert prompt layer</span>
            </div>
            <div className="detection-sweep">
              <ScanEye size={18} />
              <span>Proctored.one correlates the hidden signals</span>
            </div>
          </div>
          <div className="evidence-rail">
            <div>
              <Eye size={16} />
              <span>Gaze shift</span>
            </div>
            <div>
              <AudioWaveform size={16} />
              <span>Audio anomaly</span>
            </div>
            <div>
              <Binary size={16} />
              <span>Code drift</span>
            </div>
            <div>
              <Activity size={16} />
              <span>Answer cadence</span>
            </div>
          </div>
          <div className="signal-stack">
            <div style={{ "--level": "82%" }}>
              <span>Overlay anomaly</span>
              <b />
            </div>
            <div style={{ "--level": "74%" }}>
              <span>Code authorship drift</span>
              <b />
            </div>
            <div style={{ "--level": "68%" }}>
              <span>Answer cadence mismatch</span>
              <b />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading reveal">
          <div className="eyebrow">
            <Gauge size={16} />
            Superior intelligence engine
          </div>
          <h2>Every signal becomes a cleaner decision.</h2>
          <p>
            A premium proctoring experience needs more than a recording. It needs correlated, explainable intelligence that helps reviewers separate normal behavior from serious risk.
          </p>
        </div>
        <div className="capability-grid">
          {detections.map((item) => (
            <CapabilityCard key={item.label} icon={item.icon} label={item.label} />
          ))}
        </div>
      </section>

      <section className="setup-section" id="setup">
        <div className="setup-visual reveal embedded-visual" aria-label="Proctored.one embedded inside an existing assessment website">
          <div className="embed-browser">
            <div className="embed-toolbar">
              <span />
              <span />
              <span />
              <strong>your-assessment-platform.com/session</strong>
            </div>
            <div className="embed-page">
              <div className="host-panel">
                <MonitorCheck size={22} />
                <strong>Existing assessment page</strong>
                <span>LMS exam, interview, certification, or coding challenge</span>
              </div>
              <div className="embed-connector" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="proctor-widget">
                <div className="widget-header">
                  <ShieldCheck size={18} />
                  <strong>Proctored.one embedded</strong>
                </div>
                <div className="widget-status">
                  <div>
                    <Eye size={15} />
                    Camera verified
                  </div>
                  <div>
                    <MonitorCheck size={15} />
                    Screen protected
                  </div>
                  <div>
                    <BotOff size={15} />
                    AI assistance watch
                  </div>
                </div>
              </div>
              <div className="secure-output">
                <LockKeyhole size={18} />
                <div>
                  <strong>Secure session starts</strong>
                  <span>same website, security layer active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="setup-copy reveal">
          <div className="eyebrow">
            <Zap size={16} />
            No complicated setup
          </div>
          <h2>Embed proctoring where assessments already happen.</h2>
          <p>
            Launch with a secure widget, link, API, or platform integration. Candidates stay inside the same assessment website, while admins gain identity checks, monitoring rules, review queues, evidence packages, and policy controls.
          </p>
          <div className="command-list">
            {commandStack.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta reveal" id="demo">
        <div>
          <div className="eyebrow">
            <Sparkles size={16} />
            Early access is coming soon
          </div>
          <h2>Be first in line for the secure assessment command layer.</h2>
          <p className="final-note">
            Join the launch list for beta access, product updates, and integration availability.
          </p>
        </div>
        <a className="primary-button" href="mailto:security@proctored.one">
          Join waitlist <Mic size={18} />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
